import "./ProfileAccessCardComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ProfileAccessComponent = () => {
  const profileAccess = [
    { id: 1, profile: "Administrativo", nameAcces: "TMS XT", isPermited: true },
    { id: 2, profile: "Administrativo", nameAcces: "RMS", isPermited: true },
    {
      id: 3,
      profile: "Administrativo",
      nameAcces: "Trucks Control",
      isPermited: true,
    },
    {
      id: 4,
      profile: "Administrativo",
      nameAcces: "QualyTeam",
      isPermited: true,
    },
    { id: 5, profile: "Administrativo", nameAcces: "HCM", isPermited: true },
  ];

  return (
    <div className="profile-card-container">
      {profileAccess.length == 0 ? (
        <div id="div-profile-access-information-span">
          <span>Informe Perfil para verificar acessos...</span>
        </div>
      ) : (
        <>
          <div id="div-profile-access-information">
            <span>
              O Perfil <span id="profile-span">{profileAccess[0].profile}</span>{" "}
              tem os seguintes acessos:
            </span>
            <br />
            <ul>
              {profileAccess.map((profile) => (
                <li key={profile.id}>
                  {profile.nameAcces} <FontAwesomeIcon icon={faCheck} />
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileAccessComponent;
