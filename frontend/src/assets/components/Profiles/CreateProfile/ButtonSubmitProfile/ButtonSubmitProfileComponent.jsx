import "./ButtonSubmitProfileComponent.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonSubmitProfileComponent = ({
  setShowMsgErrorPerfilName,
  handleCreateNewProfile,
  newProfile
}) => {
  const handleSubmitProfileButton = () => {
    handleCreateNewProfile();
    if (newProfile.name.length < 2) {
      setShowMsgErrorPerfilName(true);
    } 
  };

  return (
    <button
      className="button-submit-profile"
      onClick={handleSubmitProfileButton}
    >
      <FontAwesomeIcon icon={faPlus} />
      Adicionar Perfil
    </button>
  );
};

export default ButtonSubmitProfileComponent;
