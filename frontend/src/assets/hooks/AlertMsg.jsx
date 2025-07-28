import AlertMsgSuccessComponent from "./AlertMsgComponent/AlertMsgSuccessComponent.jsx";
import AlertMsgErrorComponent from "./AlertMsgComponent/AlertMsgErrorComponent.jsx";

const AlertMsg = ({
  contentMsg,
  showAlertSuccessMsg,
  setShowAlertSuccessMsg,
  showAlertErrorMsg,
  setShowAlertErrorMsg,
}) => {
  return (
    <>
      <AlertMsgSuccessComponent
        contentMsg={contentMsg}
        showAlertSuccessMsg={showAlertSuccessMsg}
        setShowAlertSuccessMsg={setShowAlertSuccessMsg}
      />
      <AlertMsgErrorComponent
        contentMsg={contentMsg}
        showAlertErrorMsg={showAlertErrorMsg}
        setShowAlertErrorMsg={setShowAlertErrorMsg}
      />
    </>
  );
};

export default AlertMsg;
