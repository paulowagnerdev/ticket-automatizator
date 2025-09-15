import { useEffect, useState } from "react";
import requestProfiles from "../services/profiles";
import "./DisplayProfilesUl.css";

const DisplayProfilesUl = ({
  propSetEnableButtonRemoveUser,
  refetchTrigger,
  setRefetchTriggerCards,
  setIdprofile
}) => {
  const [isClicled, setIsClicled] = useState({});
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function getProfiles() {
      try {
        const profiles = await requestProfiles();
        setProfiles(profiles);
      } catch (err) {
        console.error("Erro na requisição" + err);
      }
    }

    getProfiles();
  }, [refetchTrigger]);

  const handleGetProfileOnClicked = (id, name) => {
    setProfileOnClicked(id);
    setRefetchTriggerCards((prev) => prev + 1);
    setIdprofile(id);
  };

  function setProfileOnClicked(id) {
    const clickedId = Object.keys(isClicled)[0];

    if (clickedId == id.toString()) {
      setIsClicled({});
      propSetEnableButtonRemoveUser(true);
    } else {
      setIsClicled((prev) => ({ [id]: true }));

      propSetEnableButtonRemoveUser(false);
    }
  }

  return (
    <ul id="ul-display-profile">
      <li className="li-display-profile-static">
        <div className="div-li-display-id-static">id</div>
        <div className="div-li-display-name-static">Perfis</div>
      </li>
      {profiles.map((profile) => (
        <li
          className={
            !!isClicled[profile.id]
              ? "li-display-profile clicked"
              : "li-display-profile"
          }
          key={profile.id}
          onClick={() => handleGetProfileOnClicked(profile.id, profile.nome)}
        >
          <div className="div-li-display-id">{profile.id}</div>
          <div className="div-li-display-name">{profile.nome}</div>
        </li>
      ))}
    </ul>
  );
};

export default DisplayProfilesUl;
