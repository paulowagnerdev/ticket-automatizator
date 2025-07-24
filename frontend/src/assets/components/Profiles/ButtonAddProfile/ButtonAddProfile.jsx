import "./ButtonAddProfile.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonAddProfile = ({ openCreateProfile, setOpenCreateProfile }) => {
  const handleSetShowAddUserComponent = () => {
    setOpenCreateProfile(!openCreateProfile);
  };

  return (
    <button
      className="button-submit-adduser"
      onClick={handleSetShowAddUserComponent}
    >
      <FontAwesomeIcon icon={faPlus} />
      Criar Perfil
    </button>
  );
};

export default ButtonAddProfile;
