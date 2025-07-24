import "./BtnAddAccessComponent.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BtnAddAccessComponent = ({ propOpenCreateAccessComponent,propSetOpenCreateAccessComponent }) => {
  const handleEnableAddAccessComponent = () => {
    propSetOpenCreateAccessComponent(!propOpenCreateAccessComponent);
  };
  return (
    <button
      className="button-add-access"
      onClick={handleEnableAddAccessComponent}
    >
      <FontAwesomeIcon icon={faPlus} />
      Criar Acesso
    </button>
  );
};

export default BtnAddAccessComponent;
