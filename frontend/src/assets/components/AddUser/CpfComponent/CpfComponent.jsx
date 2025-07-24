import { useState } from "react";
import { PatternFormat } from 'react-number-format';
import './CpfComponent.css'

const CpfComponent = ({functionHandleSetCpf,propMsgErrorOnSubmitCpfInput}) => {

    const [showMsgErrorCpfInput, setShowMsgErrorCpfInput] = useState(false);

    const handleInputCpfValue = (e) => {

        const cpf = e.target.value;

        if(cpf.length <= 9){
            setShowMsgErrorCpfInput(true);
        }else{
            setShowMsgErrorCpfInput(false);
            functionHandleSetCpf(cpf)
        }
        console.log(cpf)
    }

    return (
        <div className="div-cpf">
        <label>Digite o CPF do funcionário<span>*</span> :</label>
        <PatternFormat 
            format="###.###.###-##"  
            placeholder="CPF do funcionário..." 
            onChange={handleInputCpfValue}
             className={showMsgErrorCpfInput || propMsgErrorOnSubmitCpfInput ? "show-error-classname" : "" }>
        </PatternFormat>
   
       
        {
            showMsgErrorCpfInput || propMsgErrorOnSubmitCpfInput ? 

            <span id="erro-input-text">O campo CPF precisa ser preenchido...</span>

            : 

            <></>

         }

    </div>
    )
}

export default CpfComponent;