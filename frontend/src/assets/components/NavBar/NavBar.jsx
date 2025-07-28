import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import { useState } from "react";

function NavBar() {
  const [hoveringNavBav, setHoveringNavBav] = useState(false);

  return (
    <>
      <div className="fixed-right-div"></div>
      <div
        className="navBar"
        onMouseEnter={() => setHoveringNavBav(true)}
        onMouseLeave={() => setHoveringNavBav(false)}
      >
        <div className="logo">
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
        <ul className="ul-navbar">
          <li>
            <a href="/" className={hoveringNavBav ? "show" : " "}>
              <span className={hoveringNavBav ? "show" : "noShow"}>
                Enviar E-mail
              </span>

              <FontAwesomeIcon icon={faPaperPlane} className="navbar-icons" />
            </a>
          </li>
          <li>
            <a href="/users" className={hoveringNavBav ? "show" : " "}>
              <span className={hoveringNavBav ? "show" : "noShow"}>
                Usuários
              </span>

              <FontAwesomeIcon icon={faUsers} className="navbar-icons" />
            </a>
          </li>
          <li>
            <a href="/profile" className={hoveringNavBav ? "show" : " "}>
              <span className={hoveringNavBav ? "show" : "noShow"}>Perfis</span>

              <FontAwesomeIcon icon={faTags} className="navbar-icons" />
            </a>
          </li>

          <li>
            <a href="/access" className={hoveringNavBav ? "show" : " "}>
              <span className={hoveringNavBav ? "show" : "noShow"}>
                Acessos
              </span>

              <FontAwesomeIcon icon={faKey} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
