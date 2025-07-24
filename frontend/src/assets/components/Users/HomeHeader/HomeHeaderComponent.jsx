import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './HomeHeaderComponent.css'

const HomeHeaderComponent = () => {
    return (
          
        <header id="header-home">
            <h2>
                Cadastros dos Usuários
            </h2>
            <div className="search-input-div">
            <FontAwesomeIcon icon={faMagnifyingGlass} id="icon-search-homepage" />
                <input type="text" id="search-input-homepage" placeholder="Pesquise..." /> 
                
            </div>
        </header>
    )
}

export default HomeHeaderComponent;