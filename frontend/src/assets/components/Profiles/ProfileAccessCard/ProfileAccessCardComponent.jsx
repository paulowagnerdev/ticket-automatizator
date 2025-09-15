import "./ProfileAccessCardComponent.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const ProfileAccessComponent = ({ profile }) => {
  const data = { nameAcces: "TMS XT", isPermited: true };
  const [loading, setLoading] = useState(false);
  const [profileAccess, setProfileAccess] = useState([]);

  if (loading) {
    return (
      <>
        <div className="loading-profile-card-container">
          <p>...loading</p>
        </div>
      </>
    );
  }

  return (
    <div className="profile-card-container">
      {profileAccess.length === 0 ? (
        <div id="div-profile-access-information-span">
          <span>Informe Perfil para verificar acessos...</span>
        </div>
      ) : (
        <>
          <div id="div-profile-access-information">
            <span>
              O Perfil <span id="profile-span">{profile.profile}</span> tem os
              seguintes acessos:
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
