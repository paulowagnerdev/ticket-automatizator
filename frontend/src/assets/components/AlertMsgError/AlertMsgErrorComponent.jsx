import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import "./AlertMsgErrorComponent.css";
import { useEffect, useState } from "react";

const AlertMsgErrorComponent = ({
  title,
  msg,
  showAlertErrorMsg,
  setShowAlertErrorMsg,
}) => {
  useEffect(() => {
    if (showAlertErrorMsg == "in") {
      const timer = setTimeout(() => setShowAlertErrorMsg("out"), 5000);
      return () => clearTimeout(timer);
    }
  }, [showAlertErrorMsg]);

  return (
    <div className={`div-alert-msg-error-container alert-${showAlertErrorMsg}`}>
      <div className="div-icon-alert-msg-error">
        <FontAwesomeIcon icon={faSquareXmark} id="icon-fa-square-error" />
      </div>
      <div className="div-alert-msg-error">
        <span id="alert-msg-title-error">{title}</span>
        <span id="alert-msg-msg-error">{msg}</span>
      </div>
    </div>
  );
};

export default AlertMsgErrorComponent;
