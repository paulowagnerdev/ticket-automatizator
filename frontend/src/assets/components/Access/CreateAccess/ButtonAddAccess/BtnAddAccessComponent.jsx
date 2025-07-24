import "./BtnAddAccessComponent.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BtnAddAccessComponent = ({ propSetShowMsgErrorAccessName,handleBtnSubmitAccess }) => {

  return (
    <div className="div-button-submit-access">
      <button
        className="button-submit-access"
        onClick={handleBtnSubmitAccess}
      >
        <FontAwesomeIcon icon={faPlus} />
        Criar Acesso
      </button>
    </div>
  );
};

export default BtnAddAccessComponent;
