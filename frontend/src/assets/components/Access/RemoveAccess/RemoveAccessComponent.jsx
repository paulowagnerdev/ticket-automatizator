import "./RemoveAccessComponent.css";
import BtnRemoveAccessComponent from "../RemoveAccess/BtnRemoveAccess/BtnRemoveAccessComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const RemoveAccessComponent = ({
  propSetOpenRemoveAccessComponent,
  removeAccess,
  setRefetchTrigger,
  setContentMsg,
  setShowAlertSuccessMsg
}) => {
  const [
    transitionOpenAndCloseAccessComponent,
    setTransitionOpenAndCloseAccessComponent,
  ] = useState("in");
  const handleCloseRemoveAccessComponent = () => {
    setTransitionOpenAndCloseAccessComponent("out");
    setTimeout(() => {
      propSetOpenRemoveAccessComponent(false);
      setTransitionOpenAndCloseAccessComponent("in");
    }, 200);
  };

  async function handleDelete() {
    try {
      const deleteAccess = await fetch(
        `http://localhost:3000/access/${removeAccess.id}`,
        {
          method: "DELETE",
        }
      );

      const data = await deleteAccess.json();
      console.log(data);

      if (deleteAccess.ok) {
        setRefetchTrigger(prev => prev + 1);
        setContentMsg((prev) => ({
          title: data.title,
          msg: data.msg,
        }));
        setShowAlertSuccessMsg("in");
        handleCloseRemoveAccessComponent();
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="div-remove-access-container">
      <div
        className={`div-remove-access scale-${transitionOpenAndCloseAccessComponent}`}
      >
        <div className="header-remove-access">
          <FontAwesomeIcon
            icon={faXmark}
            id="exit-icon"
            onClick={handleCloseRemoveAccessComponent}
          />
        </div>
        <h2>Deseja remover o acesso {removeAccess.name}?</h2>
        <div className="div-buttons-remove-access">
          <button
            className="button-cancel-remove-access"
            onClick={handleCloseRemoveAccessComponent}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Cancelar
          </button>
          <BtnRemoveAccessComponent handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default RemoveAccessComponent;
