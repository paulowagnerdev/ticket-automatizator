import getProfileAccess from "./services/profileAccess.js";
import NavBar from "../NavBar/NavBar";
import AlertMsg from "../../hooks/AlertMsg.jsx";
import ProfileHeaderComponent from "./ProfileHeader/ProfileHeaderComponent";
import DisplayProfilesUl from "./DisplayProfilesUl/DisplayProfilesUl";
import ButtonAddProfile from "./ButtonAddProfile/ButtonAddProfile";
import BtnRemoveProfileComponent from "./ButtonRemoveProfile/BtnRemoveProfileComponent";
import ProfileAccessCardComponent from "./ProfileAccessCard/ProfileAccessCardComponent";
import UserAccessCardComponent from "./UserAccessCard/UserAccessCardComponent";
import CreateProfileComponent from "./CreateProfile/CreateProfileComponent.jsx";
import "./Profiles.css";
import { useEffect, useState } from "react";

function AddProfile() {
  const [profile, setProfile] = useState([]);
  const [idProfile, setIdprofile] = useState(0);
  const [enableButtonRemoveUser, setEnableButtonRemoveUser] = useState(true);
  const [openCreateProfile, setOpenCreateProfile] = useState(false);
  const [refetchTrigger, setRefetchTrigger] = useState(0);
  const [refetchTriggerCards, setRefetchTriggerCards] = useState(0);
  const [showAlertSuccessMsg, setShowAlertSuccessMsg] = useState("off");
  const [showAlertErrorMsg, setShowAlertErrorMsg] = useState("off");
  const [contentMsg, setContentMsg] = useState({
    title: "Title!",
    msg: "Mensagem!",
  });

  useEffect(() => {

    if (!idProfile) return;

    async function getProfile() {
      try {
        const response = await getProfileAccess(idProfile);
        const data = await response;
        setProfile(data);
        console.log(data);
      } catch (err) {
        console.error("Erro na requisição" + err);
      }
    }

    getProfile();
  }, [refetchTriggerCards]);

  return (
    <>
      <AlertMsg
        contentMsg={contentMsg}
        showAlertSuccessMsg={showAlertSuccessMsg}
        setShowAlertSuccessMsg={setShowAlertSuccessMsg}
        showAlertErrorMsg={showAlertErrorMsg}
        setShowAlertErrorMsg={setShowAlertErrorMsg}
      />
      <NavBar />

      <div className="profile-container">
        <div className="div-profile">
          <ProfileHeaderComponent />

          <DisplayProfilesUl
            propSetEnableButtonRemoveUser={setEnableButtonRemoveUser}
            refetchTrigger={refetchTrigger}
            setRefetchTriggerCards={setRefetchTriggerCards}
            setIdprofile={setIdprofile}
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
            <ProfileAccessCardComponent
              profile={profile}
              refetchTriggerCards={refetchTriggerCards}
            />
          </div>

          <div className="div-show-profile-user">
            <UserAccessCardComponent />
          </div>
        </div>

        {openCreateProfile ? (
          <CreateProfileComponent
            setOpenCreateProfile={setOpenCreateProfile}
            setContentMsg={setContentMsg}
            showAlertErrorMsg={showAlertErrorMsg}
            setShowAlertErrorMsg={setShowAlertErrorMsg}
            showAlertSuccessMsg={showAlertSuccessMsg}
            setShowAlertSuccessMsg={setShowAlertSuccessMsg}
            setRefetchTrigger={setRefetchTrigger}
            refetchTrigger={refetchTrigger}
          />
        ) : null}
      </div>
    </>
  );
}

export default AddProfile;
