import './BtnSendEmailRemoveAccessComponent.css'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BtnSendEmailRemoveAccessComponent = () => {
    return (
        <button 
            className="button-submit-remove-user" 
            onClick={{}} 
            disabled={false}>
            <FontAwesomeIcon icon={faPaperPlane}/>
            Enviar E-mail
        </button>
    )
}

export default BtnSendEmailRemoveAccessComponent;