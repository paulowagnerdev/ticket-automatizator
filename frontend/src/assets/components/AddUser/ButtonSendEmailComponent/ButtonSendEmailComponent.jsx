import './ButtonSendEmailComponent.css'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonSendEmailComponent = ({functionOnSubmit}) => {
    return (
        <button 
            className="button-submit-adduser" 
            onClick={functionOnSubmit} 
            disabled={false}>
            <FontAwesomeIcon icon={faPaperPlane}/>
            Enviar E-mail
            </button>
    )
}

export default ButtonSendEmailComponent;