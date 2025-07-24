import './ProfileHeaderComponent.css';
import SearchInputProfileComponent from '../SearchInputProfile/SearchInputProfileComponent.jsx'

const ProfileHeaderComponent = () => {
    return (
          
        <header id="header-profile">
            <h2>Perfis</h2>
            <SearchInputProfileComponent/>
        </header>
    )
}

export default ProfileHeaderComponent;