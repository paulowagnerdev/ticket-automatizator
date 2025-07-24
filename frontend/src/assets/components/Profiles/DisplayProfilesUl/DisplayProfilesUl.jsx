import { useState } from "react";
import "./DisplayProfilesUl.css";

const DisplayProfilesUl = ({ propSetEnableButtonRemoveUser }) => {
  //------------Variables------------

  const [isClicled, setIsClicled] = useState({});
  const profiles = [
    { id: 1, name: "Administrativo" },
    { id: 2, name: "Operacional" },
    { id: 3, name: "R.H" },
    { id: 4, name: "T.I" },
  ];

  // ------------Functions------------

  const handleGetProfileOnClicked = (id, name) => {
    setProfileOnClicked(id);
    const profile = [id, name];
    console.log(profile);
  };

  function setProfileOnClicked(id) {
    // ------------Toggle list:------------

    const clickedId = Object.keys(isClicled)[0];

    if (clickedId == id.toString()) {
      setIsClicled({});
      propSetEnableButtonRemoveUser(true);
    } else {
      setIsClicled((prev) => ({ [id]: true }));

      propSetEnableButtonRemoveUser(false);
    }
  }

  // ------------Component------------

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
          onClick={() => handleGetProfileOnClicked(profile.id, profile.name)}
        >
          <div className="div-li-display-id">{profile.id}</div>
          <div className="div-li-display-name">{profile.name}</div>
        </li>
      ))}
    </ul>
  );
};

export default DisplayProfilesUl;
