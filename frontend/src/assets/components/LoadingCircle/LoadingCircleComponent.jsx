import './LoadingCircleComponent.css'

const LoadingCicleComponent = ({propShowLoadingSendingEmail,propStatusLoadingSendingEmail,propTextInformationSendingEmail}) => {

    return ( 
        <>
            <div className="loading-div">

                {

                        propShowLoadingSendingEmail ?

                    <>
                                            
                    <div 
                    
                        className={`circle-loading ${propStatusLoadingSendingEmail}`}>

                    </div>
                    <span className={`text-circle-loadin ${propStatusLoadingSendingEmail}`} >{propTextInformationSendingEmail}</span>
                                            
                    </>
                                                
                    :

                    <></>


                }

                </div>
        </>
     );
}

export default LoadingCicleComponent;