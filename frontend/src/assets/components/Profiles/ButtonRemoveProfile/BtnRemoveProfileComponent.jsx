import './BtnRemoveProfileComponent.css'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BtnRemoveProfileComponent = ({propEnableButtonRemoveUser}) => {
    return (
        <button 
            className={propEnableButtonRemoveUser ? "button-submit-remove-profile disable" : "button-submit-remove-profile" }
           // onClick={() => console.log("TESTE")} 
            disabled={propEnableButtonRemoveUser}>
            <FontAwesomeIcon icon={faXmark} />
            Remover Pefil
        </button>
    )
}

export default BtnRemoveProfileComponent;