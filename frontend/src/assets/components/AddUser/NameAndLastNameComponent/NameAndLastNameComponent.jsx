import { useState } from "react";
import "./NameAndLastNameComponent.css";

const NameAndLastNameComponent = ({
  propMsgErrorOnSubmitNameInput,
  propMsgErrorOnSubmitLastnameInput,
}) => {
  const [showMsgErrorName, setShowMsgErrorsName] = useState(false);
  const [showMsgErrorLastName, setShowMsgErrorsLastName] = useState(false);

  const handleFirstNameInputValue = (e) => {
    const firstName = e.target.value;

    if (firstName.length < 3) {
      setShowMsgErrorsName(true);
    } else {
      setShowMsgErrorsName(false);
    }
  };

  const handleLastNameInputValue = (e) => {
    const lastName = e.target.value;

    if (lastName.length < 3) {
      setShowMsgErrorsLastName(true);
    } else {
      setShowMsgErrorsLastName(false);
    }
  };

  return (
    <div className="div-name-and-lastname">
      <div id="div-input-name-add-user">
        <label>
          Digite o primeiro nome <span>*</span> :
        </label>
        <input
          type="text"
          className={
            propMsgErrorOnSubmitNameInput || showMsgErrorName
              ? "show-error-classname"
              : ""
          }
          placeholder="Digite o primeiro nome do funcionário..."
          onChange={handleFirstNameInputValue}
        />
        {propMsgErrorOnSubmitNameInput || showMsgErrorName ? (
          <span id="erro-input-text">
            O campo nome precisa ser preenchido com pelo menos 3 caracteres
          </span>
        ) : (
          <></>
        )}
      </div>

      <div id="div-input-name-add-user">
        <label>
          Digite o Sobrenome <span>*</span> :
        </label>
        <input
          type="text"
          className={
            showMsgErrorLastName || propMsgErrorOnSubmitLastnameInput
              ? "show-error-classname"
              : ""
          }
          placeholder="Digite o Sobrenome do funcionário..."
          onChange={handleLastNameInputValue}
        />

        {showMsgErrorLastName || propMsgErrorOnSubmitLastnameInput ? (
          <span id="erro-input-text">
            O campo Sobrenome precisa ser preenchido com pelo menos 3 caracteres
          </span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default NameAndLastNameComponent;
