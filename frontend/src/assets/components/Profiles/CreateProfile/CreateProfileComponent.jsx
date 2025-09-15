import "./CreateProfileComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import InputNameProfileComponent from "./InputNameProfile/InputNameProfileComponent";
import ShowAccessComponent from "./ShowAccess/ShowAccessComponent";
import SelectAccessComponent from "./SelectAccess/SelectAccessComponent";
import ButtonSubmitProfileComponent from "./ButtonSubmitProfile/ButtonSubmitProfileComponent";
import { useState } from "react";

const CreateProfileComponent = ({
  setOpenCreateProfile,
  setContentMsg,
  setShowAlertErrorMsg,
  setShowAlertSuccessMsg,
  setRefetchTrigger,
  refetchTrigger,
}) => {
  const [inputValidations, setInputValidations] = useState({
    perfilName: false,
    checkBox: false,
  });
  const [newProfile, setNewProfile] = useState({ name: "", access: [] });
  const [accessClicked, setAccessClicked] = useState([]);
  const [checkboxClicked, setCheckboxClicked] = useState({});
  const [showMsgErrorPerfilName, setShowMsgErrorPerfilName] = useState(false);
  const [transitionOpenAndClose, setTransitionOpenAndClose] = useState("in");

  const handleTransitionOpenAndClose = () => {
    setTransitionOpenAndClose("out");
    setTimeout(() => {
      setOpenCreateProfile(false);
      setTransitionOpenAndClose("in");
    }, 200);
  };

  const handleCreateNewProfile = () => {
    const verifyHasErrors = showMsgErrors();
    if (verifyHasErrors) {
      setShowAlertErrorMsg("in");
    } else {
      createProfile(newProfile);
    }
  };

  const showMsgErrors = () => {
    if (!inputValidations.perfilName && !inputValidations.checkBox) {
      setContentMsg({ title: "ERRO!", msg: "Informar Nome e Acesso!" });
      setShowMsgErrorPerfilName(true);
      return true;
    } else if (!inputValidations.perfilName) {
      setShowMsgErrorPerfilName(true);
      setContentMsg({ title: "ERRO!", msg: "Informar Nome!" });
      return true;
    } else if (!inputValidations.checkBox) {
      setContentMsg({ title: "ERRO!", msg: "Informar ao Menos 01 Acesso!" });
      return true;
    }
    return false;
  };

  async function createProfile(profile) {
    console.log(refetchTrigger);
    try {
      const createProfile = await fetch("http://localhost:3000/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      });
      const res = await createProfile.json();

      if (createProfile.ok) {
        setRefetchTrigger(prev => prev + 1);
        setContentMsg({
          title: "Concluído!",
          msg: "Cadastro Realizado com Sucesso!",
        });
        setShowAlertSuccessMsg("in");
        handleTransitionOpenAndClose();
      } else {
        console.log(res);
        setContentMsg({ title: "Erro!", msg: "Erro no Cadastro" });
        setShowAlertErrorMsg("in");
      }
    } catch (err) {
      console.error(`ERRO NO CADASTRO DE PERFIL ${err}`);
    }
  }
  return (
    <div className="div-main-create-profile">
      <div className={`create-profile scale-${transitionOpenAndClose}`}>
        <div className="header-create-profile">
          <FontAwesomeIcon
            icon={faXmark}
            id="exit-icon"
            onClick={handleTransitionOpenAndClose}
          />
        </div>

        <div className="div-input-and-show-access">
          <div>
            <InputNameProfileComponent
              showMsgErrorPerfilName={showMsgErrorPerfilName}
              setShowMsgErrorPerfilName={setShowMsgErrorPerfilName}
              newProfile={newProfile}
              setNewProfile={setNewProfile}
              inputValidations={inputValidations}
              setInputValidations={setInputValidations}
            />
            <ButtonSubmitProfileComponent
              setShowMsgErrorPerfilName={setShowMsgErrorPerfilName}
              handleCreateNewProfile={handleCreateNewProfile}
              newProfile={newProfile}
            />
          </div>
          <ShowAccessComponent
            accessClicked={accessClicked}
            setAccessClicked={setAccessClicked}
            setCheckboxClicked={setCheckboxClicked}
            setNewProfile={setNewProfile}
            setInputValidations={setInputValidations}
          />
        </div>

        <div className="div-checkbox-access">
          <SelectAccessComponent
            setInputValidations={setInputValidations}
            accessClicked={accessClicked}
            setAccessClicked={setAccessClicked}
            newProfile={newProfile}
            setNewProfile={setNewProfile}
            checkboxClicked={checkboxClicked}
            setCheckboxClicked={setCheckboxClicked}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateProfileComponent;
