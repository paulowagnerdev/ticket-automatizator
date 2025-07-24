import "./BtnRemoveAccessComponent.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BtnRemoveAccessComponent = ({handleDelete}) => {
  const handleRemoveAccessComponent = () => {
    handleDelete();
  };
  return (
    <button
      className="button-remove-access"
      onClick={handleRemoveAccessComponent}
    >
      <FontAwesomeIcon icon={faXmark} />
      Remover Acesso
    </button>
  );
};

export default BtnRemoveAccessComponent;
