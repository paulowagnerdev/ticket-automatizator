import './DisplayUsersUl.css'

const DisplayUsersUl = () => {

    const users = [
        {name: 'Nome Completo do Usuário',cpf: '000.000.000-00',branch: 'Transligue Matriz',access: 'Administrativo'},
        {name: 'Nome Completo do Usuário',cpf: '000.000.000-00',branch: 'Transligue Matriz',access: 'Administrativo'},
        {name: 'Nome Completo do Usuário',cpf: '000.000.000-00',branch: 'Transligue Matriz',access: 'Administrativo'},
        {name: 'Nome Completo do Usuário',cpf: '000.000.000-00',branch: 'Transligue Matriz',access: 'Administrativo'},
        {name: 'Nome Completo do Usuário',cpf: '000.000.000-00',branch: 'Transligue Matriz',access: 'Administrativo'},
        {name: 'Nome Completo do Usuário',cpf: '000.000.000-00',branch: 'Transligue Matriz',access: 'Administrativo'},
        {name: 'Nome Completo do Usuário',cpf: '000.000.000-00',branch: 'Transligue Matriz',access: 'Administrativo'},
        {name: 'Nome Completo do Usuário',cpf: '000.000.000-00',branch: 'Transligue Matriz',access: 'Administrativo'},
        {name: 'Nome Completo do Usuário',cpf: '000.000.000-00',branch: 'Transligue Matriz',access: 'Administrativo'},
        {name: 'Nome Completo do Usuário',cpf: '000.000.000-00',branch: 'Transligue Matriz',access: 'Administrativo'},
        {name: 'Nome Completo do Usuário',cpf: '000.000.000-00',branch: 'Transligue Matriz',access: 'Administrativo'},
        {name: 'Nome Completo do Usuário',cpf: '000.000.000-00',branch: 'Transligue Matriz',access: 'Administrativo'},
        {name: 'Nome Completo do Usuário',cpf: '000.000.000-00',branch: 'Transligue Matriz',access: 'Administrativo'},
        {name: 'Nome Completo do Usuário',cpf: '000.000.000-00',branch: 'Transligue Matriz',access: 'Administrativo'},
        {name: 'Nome Completo do Usuário',cpf: '000.000.000-00',branch: 'Transligue Matriz',access: 'Administrativo'},
        {name: 'Nome Completo do Usuário',cpf: '000.000.000-00',branch: 'Transligue Matriz',access: 'Administrativo'},
        {name: 'Nome Completo do Usuário',cpf: '000.000.000-00',branch: 'Transligue Matriz',access: 'Administrativo'},
        {name: 'Nome Completo do Usuário',cpf: '000.000.000-00',branch: 'Transligue Matriz',access: 'Administrativo'},
        {name: 'Nome Completo do Usuário',cpf: '000.000.000-00',branch: 'Transligue Matriz',access: 'Administrativo'},
        {name: 'Nome Completo do Usuário',cpf: '000.000.000-00',branch: 'Transligue Matriz',access: 'Administrativo'},
        {name: 'Nome Completo do Usuário',cpf: '000.000.000-00',branch: 'Transligue Matriz',access: 'Administrativo'},
        {name: 'Nome Completo do Usuário',cpf: '000.000.000-00',branch: 'Transligue Matriz',access: 'Administrativo'},
        {name: 'Nome Completo do Usuário',cpf: '000.000.000-00',branch: 'Transligue Matriz',access: 'Administrativo'},
    ]

    return (
        <ul id="ul-display-users">
                <li id="li-display-top-header">
                    <div>Nome</div>
                    <div>CPF</div>
                    <div>Filial</div>
                    <div>Perfil</div>
                </li>
              {
                users.map((user) => (
                    <li className="li-display">
                    <div >{user.name}</div>
                    <div>{user.cpf}</div>
                    <div>{user.branch}</div>
                    <div>{user.access}</div>
                </li>      
                ))
              }                  
            </ul>

    )
}

export default DisplayUsersUl;