import "./InputNameAccessComponent.css";

const InputNameAccessComponent = ({
  showMsgErrorAccessName,
  setShowMsgErrorAccessName,
  setAccess,
}) => {
  const handleNameChange = (e) => {
    const inputName = e.target.value;
    setAccess((prev) => ({ ...prev, name: inputName.trim() }));
    validateName(inputName);
  };

  const validateName = (inputName) => {
    if (inputName.trim().length <= 2 || inputName.trim().length >= 41) {
      setShowMsgErrorAccessName(true);
    } else {
      setShowMsgErrorAccessName(false);
    }
  };

  return (
    <div className="div-input-name-access">
      <label>
        Nome do Acesso<span>*</span> :
      </label>
      <input
        type="text"
        onChange={(e) => handleNameChange(e)}
        className={
          showMsgErrorAccessName ? "error-input-profile-border" : null
        }
        placeholder="Informe o nome do perfil..."
      />
      {showMsgErrorAccessName ? (
        <span id="error-input-profile-access">
          *O campo nome precisa ser preenchido com pelo menos 3 caracteres e no máximo 40
        </span>
      ) : null}
    </div>
  );
};

export default InputNameAccessComponent;
