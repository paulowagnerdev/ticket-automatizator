import "./AccessHeaderComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const AccessHeaderComponent = () => {
  return (
    <header className="header-access-component">
      <h2>Cadastros de Acessos</h2>
      <div className="search-input-div-access">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          id="icon-search-homepage-access"
        />
        <input type="text" id="search-input-access" placeholder="Pesquise..." />
      </div>
    </header>
  );
};

export default AccessHeaderComponent;
