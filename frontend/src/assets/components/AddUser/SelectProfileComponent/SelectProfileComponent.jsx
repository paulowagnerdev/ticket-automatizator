import { useEffect, useState } from "react";
import './SelectProfileComponent.css'

const SelectProfileComponent = () => {

    let profiles = [{}]

    useEffect(() => {

        const url = 'http://localhost:3000/profiles';

       const getAsyncProfiles = async () => {

            try{
                const profiles = await fetch(url)

                const data = await profiles.json()
                console.log(data);
            }catch(err){
                console.error(err)
            }
       }

        getAsyncProfiles();
      
    }, [])

    const [checkBoxValues, setCheckBoxValues] = useState({
        tmsxt: true, 
        hcm: false,
        rms: false,
        qualyteam: false,
        buonny: true,
        trucks: true,
        ndd: false,
        crani: false,
        termo: false,
        nameemail: false
    });

    const handleSelectUpdateValues = (e) => {

        const value = e.target.value

        switch(value){
            case 'adm':
                setCheckBoxValues({
                    tmsxt: true, 
                    hcm: false,
                    rms: false,
                    qualyteam: true,
                    buonny: true,
                    trucks: true,
                    ndd: true,
                    crani: false,
                    termo: true,
                    nameemail: true
                })
                break;
            case 'operacional':
                setCheckBoxValues({
                    tmsxt: true, 
                    hcm: false,
                    rms: true,
                    qualyteam: false,
                    buonny: true,
                    trucks: true,
                    ndd: true,
                    crani: false,
                    termo: true,
                    nameemail: false
                })
                break;
            case 'aprendiz':
                setCheckBoxValues({
                    tmsxt: true, 
                    hcm: false,
                    rms: false,
                    qualyteam: false,
                    buonny: false,
                    trucks: false,
                    ndd: false,
                    crani: false,
                    termo: false,
                    nameemail: false
                })
                break
        }

    };
    return (
        <div className="select-div-profile">
                <label>Selecione um Perfil:</label>
                <select 
                    name="select-perfil" 
                    id="select-add-user" 
                    onChange={handleSelectUpdateValues}>
                    {
                        profiles.map((profile) => (
                            <option value={profile.id}>{profile.name}</option>
                        ))
                    }
                </select>
        </div>
    )
}

export default SelectProfileComponent;