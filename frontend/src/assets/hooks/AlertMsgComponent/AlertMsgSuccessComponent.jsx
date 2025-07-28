import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import "./AlertMsgSuccessComponent.css";
import { useEffect } from "react";

const AlertMsgSuccessComponent = ({
  contentMsg,
  showAlertSuccessMsg,
  setShowAlertSuccessMsg,
}) => {
  useEffect(() => {
    if (showAlertSuccessMsg == "in") {
      const timer = setTimeout(() => setShowAlertSuccessMsg("out"), 5000);
      return () => clearTimeout(timer);
    }
  }, [showAlertSuccessMsg]);

  return (
    <div className={`div-alert-msg-container alert-${showAlertSuccessMsg}`}>
      <div className="div-icon-alert-msg">
        <FontAwesomeIcon icon={faSquareCheck} id="icon-fa-square" />
      </div>
      <div className="div-alert-msg">
        <span id="alert-msg-title">{contentMsg.title}</span>
        <span id="alert-msg-msg">{contentMsg.msg}</span>
      </div>
    </div>
  );
};

export default AlertMsgSuccessComponent;

