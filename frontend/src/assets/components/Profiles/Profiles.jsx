import NavBar from "../NavBar/NavBar";
import ProfileHeaderComponent from "./ProfileHeader/ProfileHeaderComponent";
import DisplayProfilesUl from "./DisplayProfilesUl/DisplayProfilesUl";
import ButtonAddProfile from "./ButtonAddProfile/ButtonAddProfile";
import BtnRemoveProfileComponent from "./ButtonRemoveProfile/BtnRemoveProfileComponent";
import ProfileAccessCardComponent from "./ProfileAccessCard/ProfileAccessCardComponent";
import UserAccessCardComponent from "./UserAccessCard/UserAccessCardComponent";
import CreateProfileComponent from "./CreateProfile/CreateProfileComponent.jsx";
import AlertMsgErrorComponent from "../AlertMsgError/AlertMsgErrorComponent.jsx";
import "./Profiles.css";
import { useState } from "react";

function AddProfile() {
  const [enableButtonRemoveUser, setEnableButtonRemoveUser] = useState(true);
  const [openCreateProfile, setOpenCreateProfile] = useState(false);
  const [showAlertSuccessMsg, setShowAlertSuccessMsg] = useState("off");
  const [showAlertErrorMsg, setShowAlertErrorMsg] = useState("off");
  const [contentMsg, setContentMsg] = useState({
    title: "Title!",
    msg: "Mensagem!",
  });

  return (
    <>
      <AlertMsgErrorComponent
        showAlertErrorMsg={showAlertErrorMsg}
        setShowAlertErrorMsg={setShowAlertErrorMsg}
        title={contentMsg.title}
        msg={contentMsg.msg}
      />
      <NavBar />

      <div className="profile-container">
        <div className="div-profile">
          <ProfileHeaderComponent />

          <DisplayProfilesUl
            propSetEnableButtonRemoveUser={setEnableButtonRemoveUser}
          />

          <div className="div-button-add-profile">
            <BtnRemoveProfileComponent
              propEnableButtonRemoveUser={enableButtonRemoveUser}
            />

            <ButtonAddProfile
              openCreateProfile={openCreateProfile}
              setOpenCreateProfile={setOpenCreateProfile}
            />
          </div>
        </div>

        <div className="div-profile-properties">
          <div className="div-show-wprofile-have-access">
            <ProfileAccessCardComponent />
          </div>

          <div className="div-show-profile-user">
            <UserAccessCardComponent />
          </div>
        </div>

        {openCreateProfile ? (
          <CreateProfileComponent
            setOpenCreateProfile={setOpenCreateProfile}
            setContentMsg={setContentMsg}
            setShowAlertErrorMsg={setShowAlertErrorMsg}
          />
        ) : null}
      </div>
    </>
  );
}

export default AddProfile;
