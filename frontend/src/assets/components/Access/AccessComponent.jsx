import NavBar from "../NavBar/NavBar";
import AlertMsg from "../../hooks/AlertMsg.jsx";
import "./AccessComponent.css";
import AccessHeaderComponent from "./AccessHeader/AccessHeaderComponent.jsx";
import AccessDisplayUlComponent from "./AccessDisplayUl/AccessDisplayUlComponent.jsx";
import BtnRemoveAccessComponent from "./ButtonRemoveAccess/BtnRemoveAccessComponent.jsx";
import BtnAddAccessComponent from "./ButtonAddAccess/BtnAddAccessComponent.jsx";
import CreateAccessComponent from "./CreateAccess/CreateAccessComponent.jsx";
import RemoveAccessComponent from "./RemoveAccess/RemoveAccessComponent.jsx";
import { useState } from "react";

const AccessComponent = () => {
  //--------------------------------Remove Access------------------------------------------
  const [removeAccess, setRemoveAccess] = useState({});
  //--------------------------------Remove Access------------------------------------------
  //--------------------------------Show Alert Mensage on Display------------------------------------------
  const [showAlertSuccessMsg, setShowAlertSuccessMsg] = useState("off");
  const [showAlertErrorMsg, setShowAlertErrorMsg] = useState("off");
  const [contentMsg, setContentMsg] = useState({
    title: "Title!",
    msg: "Mensagem!",
  });
  //--------------------------------Show Alert Mensage on Display------------------------------------------

  //--------------------------------UseEffect Ul renderizator------------------------------------------
  const [refetchTrigger, setRefetchTrigger] = useState(0);
  //--------------------------------UseEffect Ul renderizator------------------------------------------

  //--------------------------------Enable button Remove Users------------------------------------------
  const [enableBtnRemoveAccess, setEnableBtnRemoveAccess] = useState(false);
  //--------------------------------Enable button Remove Users------------------------------------------

  //--------------------------------Open Display Create Access------------------------------------------
  const [openCreateAccessComponent, setOpenCreateAccessComponent] =
    useState(false);
  //--------------------------------Open Display Create Access------------------------------------------

  //--------------------------------Open Display Remove Access------------------------------------------
  const [openRemoveAccessComponent, setOpenRemoveAccessComponent] =
    useState(false);
  //--------------------------------Open Display Remove Access------------------------------------------
  return (
    <>
      <NavBar />

      <AlertMsg
        contentMsg={contentMsg}
        showAlertSuccessMsg={showAlertSuccessMsg}
        setShowAlertSuccessMsg={setShowAlertSuccessMsg}
        showAlertErrorMsg={showAlertErrorMsg}
        setShowAlertErrorMsg={setShowAlertErrorMsg}
      />

      <div className="access-container">
        <AccessHeaderComponent />
        <main>
          <AccessDisplayUlComponent
            setRemoveAccess={setRemoveAccess}
            propSetEnableBtnRemoveAccess={setEnableBtnRemoveAccess}
            refetchTrigger={refetchTrigger}
          />
          {openCreateAccessComponent ? (
            <CreateAccessComponent
              propOpenCreateAccessComponent={openCreateAccessComponent}
              propSetOpenCreateAccessComponent={setOpenCreateAccessComponent}
              setShowAlertSuccessMsg={setShowAlertSuccessMsg}
              setShowAlertErrorMsg={setShowAlertErrorMsg}
              setContentMsg={setContentMsg}
              setRefetchTrigger={setRefetchTrigger}
            />
          ) : null}
          {openRemoveAccessComponent ? (
            <RemoveAccessComponent
              propSetOpenRemoveAccessComponent={setOpenRemoveAccessComponent}
              setShowAlertSuccessMsg={setShowAlertSuccessMsg}
              setShowAlertErrorMsg={setShowAlertErrorMsg}
              setContentMsg={setContentMsg}
              removeAccess={removeAccess}
              setRefetchTrigger={setRefetchTrigger}
            />
          ) : null}
        </main>
        <footer className="access-container-footer">
          <BtnRemoveAccessComponent
            propEnableBtnRemoveAccess={enableBtnRemoveAccess}
            propSetOpenRemoveAccessComponent={setOpenRemoveAccessComponent}
          />
          <BtnAddAccessComponent
            propOpenCreateAccessComponent={openCreateAccessComponent}
            propSetOpenCreateAccessComponent={setOpenCreateAccessComponent}
          />
        </footer>
      </div>
    </>
  );
};

export default AccessComponent;
