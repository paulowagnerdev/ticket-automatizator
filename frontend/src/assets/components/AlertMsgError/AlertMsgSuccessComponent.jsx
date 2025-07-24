import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import './AlertMsgSuccessComponent.css'
import { useEffect } from "react";

const AlertMsgSuccessComponent = ({title,msg,showAlertMsg,setShowAlertMsg}) => {

    // const [showAlertMsg, setShowAlertMsg] = useState("off");

  
  useEffect(() => {
   if(showAlertMsg == 'in'){
     const timer = setTimeout(() => setShowAlertMsg("out"),5000);
    return () => clearTimeout(timer);
   }
  },[showAlertMsg])


  return (
    <div className={`div-alert-msg-container alert-${showAlertMsg}`}>
        <div className="div-icon-alert-msg">
           <FontAwesomeIcon icon={faSquareCheck} id="icon-fa-square" />
        </div>
        <div className="div-alert-msg">
           <span id="alert-msg-title">{title}</span>
           <span id="alert-msg-msg">{msg}</span>
        </div>
    </div>
  )
}

export default AlertMsgSuccessComponent;