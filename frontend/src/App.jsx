import "./App.css";
import { motion } from "motion/react";
import NavBar from "../src/assets/components/NavBar/NavBar.jsx";
import AddUser from "../src/assets/components/AddUser/AddUser.jsx";
import RemoveUser from "../src/assets/components/RemoveUser/RemoveUser.jsx";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faUserSlash } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [addUserPopUp, setAddUserPopUp] = useState([false, false]);

  const handleOpenAddUser = () => {
    setAddUserPopUp(() => {
      return [true, false];
    });
  };

  const handleCloseAddUser = () => {
    setAddUserPopUp(() => {
      return [false, false];
    });
  };

  const handleRemoveAddUser = () => {
    setAddUserPopUp(() => {
      return [false, true];
    });

    console.log(addUserPopUp);
  };

  return (
    <>
      <div className="main-container">
        <NavBar />

        <div className="e-mail-container">
          {addUserPopUp[0] || addUserPopUp[1] ? (
            <></>
          ) : (
            <>
              <div className="h2-div-homepage">
                <h2 id="title-users">Abertura de Tickets no T.I</h2>
              </div>

              <div id="icons-div-homepage">
                <div className="button-div" onClick={handleOpenAddUser}>
                  <p>Criar Acessos </p>
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    className="icon-div-card-insert-user"
                  />
                </div>

                <div className="button-div" onClick={handleRemoveAddUser}>
                  <p>Remover Acessos</p>
                  <FontAwesomeIcon
                    icon={faUserSlash}
                    className="icon-div-card-delete-user"
                  />
                </div>
              </div>
            </>
          )}

          {addUserPopUp[0] ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AddUser
                closePopUp={addUserPopUp[0]}
                functionClosePopUp={handleCloseAddUser}
              />
            </motion.div>
          ) :null}

          {addUserPopUp[1] ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <RemoveUser functionClosePopUp={handleCloseAddUser} />
            </motion.div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
