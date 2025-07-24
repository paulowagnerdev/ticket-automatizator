import "./InputNameProfileComponent.css";

const InputNameProfileComponent = ({
  showMsgErrorPerfilName,
  setShowMsgErrorPerfilName,
  setNewProfile,
  setInputValidations,
}) => {
  const handleInputNameProfile = (e) => {
    const inputName = e.target.value;
    validNameProfile(inputName);
    showMsgError(inputName);
    setNewProfile((prev) => ({
      ...prev,
      name: inputName,
    }));
  };

  const showMsgError = (inputName) => {
    if (inputName.trim().length <= 2) {
      setShowMsgErrorPerfilName(true);
    } else {
      setShowMsgErrorPerfilName(false);
    }
  };

  const validNameProfile = (inputName, perfilName) => {
    if (inputName.trim().length > 2) {
      setInputValidations((prev) => ({
        ...prev,
        perfilName: true,
      }));
    } else {
      setInputValidations((prev) => ({
        ...prev,
        perfilName: false,
      }));
    }
  };

  return (
    <div className="div-input-perfil-name">
      <label>
        Nome do Perfil<span>*</span> :
      </label>
      <input
        type="text"
        onChange={(e) => handleInputNameProfile(e)}
        className={showMsgErrorPerfilName ? "error-input-profile-border" : null}
        placeholder="Informe o nome do perfil..."
      />
      {showMsgErrorPerfilName ? (
        <span id="error-input-profile">
          *O campo nome precisa ser preenchido com pelo menos 3 caracteres
        </span>
      ) : (
        <></>
      )}
    </div>
  );
};

export default InputNameProfileComponent;
