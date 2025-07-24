import './BtnRemoveAccessComponent.css'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BtnRemoveAccessComponent = ({propEnableBtnRemoveAccess,propSetOpenRemoveAccessComponent}) => {

    const handleOpenRemoveAccessComponent = () => {

        if(propEnableBtnRemoveAccess == true){
             propSetOpenRemoveAccessComponent(true);
        }
       

    }
    return (
        <button 
            className={propEnableBtnRemoveAccess ? "button-remove-access " : "button-remove-access disable" }
           onClick={handleOpenRemoveAccessComponent} 
            disabled={!propEnableBtnRemoveAccess}>
            <FontAwesomeIcon icon={faXmark} />
            Remover Acesso
        </button>
    )
}

export default BtnRemoveAccessComponent;