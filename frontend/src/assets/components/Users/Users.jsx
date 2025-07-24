import NavBar from "../NavBar/NavBar.jsx"
import HomeHeaderComponent from "./HomeHeader/HomeHeaderComponent.jsx";
import DisplayUsersUl from "./DisplayUsersUl/DisplayUsersUl.jsx";
import "../Users/Users.css"
import { useEffect, useState } from "react";


function Users() {

    const [person, setPerson] = useState([]);

    useEffect(() => {

        let users = [];
     
        
        const getCadastros = async () => {

            try{
                    const get = await fetch('http://localhost:3000/cadastros',{
                    method: 'GET'
                })

                if(!get.ok){
                    console.error("ERRO NO CONSUMO DA API");
                }

                users = await get.json();
                setPerson(users);


            }catch(err){
                throw new Error(err)
            }
        }

        getCadastros();

    },[])


    const handleDeleteUser = (id) => {
        
            console.log(id);
        
    }

    return (
    
        <>
            <NavBar/>
        
        <div className="home-container">    

            <HomeHeaderComponent/>

            <main id="main-home">

                <DisplayUsersUl/>

            </main>
       </div>
       </>
);
}

export default Users;