import { useState } from "react";
import "./DisplayProfilesUl.css";

const DisplayProfilesUl = ({
  propSetEnableButtonRemoveUser,
  refetchTrigger,
}) => {
  const [isClicled, setIsClicled] = useState({});
  const [profiles, setProfiles] = useState([]);

  useState(async () => {
    try {
      const getProfiles = await fetch("http://localhost:3000/profile", {
        method: "GET",
      });
      const data = await getProfiles.json();
      if (getProfiles.ok) {
        setProfiles(data);
      }
    } catch (error) {
      console.error("Errro na requisição!");
    }
  }, [refetchTrigger]);

  const handleGetProfileOnClicked = (id, name) => {
    setProfileOnClicked(id);
    //const profile = [id, name];
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
        <div className="div-li-display-name-static">Acessos</div>
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
