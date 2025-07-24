import './SearchInputProfileComponent.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchInputProfileComponent = () => {
    return(
        <>
            <div className="search-input-div-profile">
                <FontAwesomeIcon icon={faMagnifyingGlass} id="icon-search-profile" />
                <input type="text" id="search-input-profile" placeholder="Pesquise..." /> 
            </div>
        </>
    )
}

export default SearchInputProfileComponent;