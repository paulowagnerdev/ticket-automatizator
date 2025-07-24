import "../../components/AddUser/AddUser.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CpfComponent from './CpfComponent/CpfComponent.jsx'
import NameAndLastNameComponent from "./NameAndLastNameComponent/NameAndLastNameComponent.jsx";
import SelectProfileComponent from "./SelectProfileComponent/SelectProfileComponent.jsx";
import SelectBranchComponent from "./SelectBranchComponent/SelectBranchComponent.jsx";
import ButtonSendEmailComponent from "./ButtonSendEmailComponent/ButtonSendEmailComponent.jsx";
import LoadingCicleComponent from "../LoadingCircle/LoadingCircleComponent.jsx";



function AddUser({functionClosePopUp}){

    
    const [finalPersonDataValues, setFinalPersonDataValues] = useState(
        {firstName: '',
         lastName: '', 
         cpf: '', 
         company: '', 
         tmsxt: true, 
         hcm: false, 
         rms: false,
        qualyteam: false,
        buonny: true, 
        trucks: true,
        ndd: false,
        crani: false,
        termo: false,
        nameemail: false}
    );
    const [msgErrorOnSubmitCpfInput,setMsgErrorOnSubmitCpfInput] = useState(false);
    const [msgErrorOnSubmitNameInput,setMsgErrorOnSubmitNameInput] = useState(false);
    const [msgErrorOnSubmitLastnameInput,setMsgErrorOnSubmitLastnameInput] = useState(false);
    const [textInformationSendingEmail, setTexttInformationSendingEmail] = useState('iniciando processo de envio...');
    const [showLoadingSendingEmail, setShowLoadingSendingEmail] = useState(false);
    const [statusLoadingSendingEmail, setStatusLoadingSendingEmail] = useState('');

    const onClickBtnSubmit = (e) => {

        e.preventDefault();
        
        console.log(finalPersonDataValues);
     
        setMsgErrorOnSubmitCpfInput(true);
        setMsgErrorOnSubmitNameInput(true);
        setMsgErrorOnSubmitLastnameInput(true);
        setShowLoadingSendingEmail(true);
        
        //setTimeout(( sendEmail(finalPersonDataValues),Infinity));

        
    }
 
    const sendEmail = async values => {

        const url = 'http://localhost:3000/send-email'

        setShowLoadingSendingEmail(true);
        

        try{
            const send = await fetch(url,
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(values)
                }
            )

            const data = await send.json()
            console.log(data);
            console.log("conectando com o banco");
            
        }catch(err){
            console.error(err);
            setStatusLoadingSendingEmail("error");

            setTexttInformationSendingEmail('ERR_CONNECTION_REFUSED');

            }
    }

    return (
        <div className="div-add-user-popup">

            <FontAwesomeIcon icon={faXmark} id="exit-icon" onClick={functionClosePopUp} /> 

           <form >                

                <h3>Preenche as informações do funcionário:</h3>


                <CpfComponent 
                    propMsgErrorOnSubmitCpfInput={msgErrorOnSubmitCpfInput}
                    functionHandleSetCpf={(e) => setFinalPersonDataValues((prev) => ({...prev, cpf: e}))}
                />

                <NameAndLastNameComponent
                   propMsgErrorOnSubmitNameInput={msgErrorOnSubmitNameInput}
                   propMsgErrorOnSubmitLastnameInput={msgErrorOnSubmitLastnameInput}
                />

                <div className="selects-div-components">

                    <SelectProfileComponent/>

                    <SelectBranchComponent/>

                </div>

                <div className="div-select-button">

                   
                    <ButtonSendEmailComponent 
                    functionOnSubmit={(e) => onClickBtnSubmit(e)}
                    />
  

                 </div>
                    
               
                <div className="div-loading-adduser">
                    <LoadingCicleComponent
                        propShowLoadingSendingEmail={showLoadingSendingEmail}
                        propStatusLoadingSendingEmail={statusLoadingSendingEmail}
                        propTextInformationSendingEmail={textInformationSendingEmail}
                    />
                </div>
               

              
           </form>

       
                
        </div> 
    )
}

export default AddUser;


