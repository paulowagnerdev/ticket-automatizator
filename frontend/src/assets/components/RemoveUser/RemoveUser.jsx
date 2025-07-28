import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import SelectRemoveUser from './SelectRemoveUsers/SelectRemoveUser'
import BtnSendEmailRemoveAccessComponent from './ButtonSendEmailRemoveAccessComponent/BtnSendEmailRemoveAccessComponent'
import LoadingCicleComponent from "../../hooks/LoadingCircle/LoadingCircleComponent"
import './removeUser.css'

function RemoveUser({functionClosePopUp}) {

   const [textInformationSendingEmail, setTexttInformationSendingEmail] = useState('iniciando processo de envio...');
   const [showLoadingSendingEmail, setShowLoadingSendingEmail] = useState(false);
   const [statusLoadingSendingEmail, setStatusLoadingSendingEmail] = useState('');


  return (

    <div className='div-removeuser-popup '>

        <FontAwesomeIcon icon={faXmark} id="exit-icon" onClick={functionClosePopUp} />

        <h3>Selecione um Usuário para remover:</h3>

        <div className='div-select-and-btn-removeuser'>
            
            <SelectRemoveUser/>

        </div>

        <BtnSendEmailRemoveAccessComponent/>

        <div className='div-loading-removeuser'>
            <LoadingCicleComponent
              propShowLoadingSendingEmail={showLoadingSendingEmail}
              propStatusLoadingSendingEmail={statusLoadingSendingEmail}
              propTextInformationSendingEmail={textInformationSendingEmail}
             />
        </div>

    </div>

  )
}

export default RemoveUser;