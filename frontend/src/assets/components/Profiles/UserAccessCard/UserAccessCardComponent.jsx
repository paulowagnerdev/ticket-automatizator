import './UserAccessCardComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const UserAccessCardComponent = () => {

      const usersProfile = [
         {id: 1, profile:'Administrativo',users: 'Paulo Eduardo Wagner', isPermited: true},
          {id: 2, profile:'Administrativo',users: 'Pedro da Rocha', isPermited: true},
          {id: 3, profile:'Administrativo',users: 'Thiago Silva', isPermited: true},
          {id: 4, profile:'Administrativo',users: 'Anderson Pedro', isPermited: true},

      ]
  
  
      return (
         
              <div className="profile-card-container">
                  
                  {
                      usersProfile.length == 0 ?
  
                              
                          <div id='div-profile-access-information-span'>
                              <span>Informe Perfil para verificar acessos...</span>
                          </div>
  
                          :
  
                          <>
                              <div id='div-profile-access-information'>
                                  <span>O Perfil <span id='profile-span'>{usersProfile[0].profile}</span> tem os seguintes usuários:</span>
                                  <br />
                                  <ul>
                                      {
                                          usersProfile.map((user) => ( 
                                              <li key={user.id}>
                                                    <FontAwesomeIcon icon={faUser} />
                                                    {user.users} 
                                            </li>
                                          ))
                                      }
                                  </ul>
                              </div>
                          </>
                  }
  
              </div>
         
      )
}

export default UserAccessCardComponent;