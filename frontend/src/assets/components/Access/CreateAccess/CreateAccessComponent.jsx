import "./CreateAccessComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import InputNameAccessComponent from "./InputNameAccess/InputNameAccessComponent";
import InputTextAreaComponent from "./InputTextArea/InputTextAreaComponent";
import BtnAddAccessComponent from "../CreateAccess/ButtonAddAccess/BtnAddAccessComponent";
const CreateAccessComponent = ({
  propSetOpenCreateAccessComponent,
  setShowAlertSuccessMsg,
  setShowAlertErrorMsg,
  setContentMsg,
  setRefetchTrigger,
}) => {
  //-----------------------------Show Msg Error in Display------------------------------------//
  const [showMsgErrorAccessName, setShowMsgErrorAccessName] = useState(false);
  //-----------------------------Show Msg Error in Display------------------------------------//

  //-----------------------------Transition Open and Close------------------------------------//
  const [transitionOpenAndClose, setTransitionOpenAndClose] = useState("in");
  //-----------------------------Transition Open and Close------------------------------------//

  //-----------------------------Access Obj Constructor------------------------------------//
  const [access, setAccess] = useState({ name: "", description: "" });
  //-----------------------------Access Obj Constructor------------------------------------//

  const handleCloseCreateAccessComponent = () => {
    setTransitionOpenAndClose("out");
    setTimeout(() => {
      propSetOpenCreateAccessComponent(false);
      setTransitionOpenAndClose("in");
    }, 200);
  };

  const handleBtnSubmitAccess = () => {
    if (access.name.trim().length <= 3 || access.name.trim().length >= 41) {
      setShowMsgErrorAccessName(true);
      console.log(access.name.length);
    } else {
      postAsyncAccess(access);
    }
  };

  async function postAsyncAccess(access) {
    try {
      const req = await fetch("http://localhost:3000/access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(access),
      });
      const data = await req.json();
      if (req.ok) {
        setRefetchTrigger((prev) => prev + 1);
        setContentMsg((prev) => ({
          title: data.title,
          msg: data.msg,
        }));
        setShowAlertSuccessMsg("in");
        handleCloseCreateAccessComponent();
      }
      if (!req.ok) {
        errorMsg(data);
        console.log(data);
      }
    } catch (err) {
      errorMsg();
    }

    function errorMsg() {
      setContentMsg((data) => ({
        title: data.title || "ERROR!",
        msg: "Não foi possível Cadastrar",
      }));
      setShowAlertErrorMsg("in");
    }
  }

  return (
    <div className="remove-access-container">
      <div
        className={`div-remove-access-component scale-${transitionOpenAndClose}`}
      >
        <div className="header-create-access">
          <FontAwesomeIcon
            icon={faXmark}
            id="exit-icon"
            onClick={handleCloseCreateAccessComponent}
          />
        </div>

        <InputNameAccessComponent
          showMsgErrorAccessName={showMsgErrorAccessName}
          setShowMsgErrorAccessName={setShowMsgErrorAccessName}
          setAccess={setAccess}
        />

        <InputTextAreaComponent setAccess={setAccess} />

        <BtnAddAccessComponent
          propShowMsgErrorAccessName={showMsgErrorAccessName}
          propSetShowMsgErrorAccessName={setShowMsgErrorAccessName}
          handleBtnSubmitAccess={handleBtnSubmitAccess}
        />
      </div>
    </div>
  );
};

export default CreateAccessComponent;
