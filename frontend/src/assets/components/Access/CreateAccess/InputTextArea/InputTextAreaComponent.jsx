import "./InputTextAreaComponent.css";

const InputTextAreaComponent = ({ setAccess }) => {
  const handleDescriptionChange = (e) => {
    const inputDescription = e.target.value;
    setAccess((prev) => ({
      ...prev,
      description: inputDescription.trim(),
    }));
  };
  return (
    <div className="div-input-description-textarea">
      <label>Descrição: </label>
      <textarea
        name="description"
        id="description"
        onChange={handleDescriptionChange}
        placeholder="Insira uma descrição para o acesso..."
      ></textarea>
    </div>
  );
};

export default InputTextAreaComponent;


