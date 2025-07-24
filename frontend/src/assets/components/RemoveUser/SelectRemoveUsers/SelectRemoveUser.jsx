import './SelectRemoveUser.css'

const  SelectRemoveUser = ()=> {
    let users = [
        {}
    ];

    return (
        <div className="remove-user-div">
            <select>
                {
                    users.map((user) => (
                        <option value={user.id}>{user.name}</option>
                    ))
                }
            </select>
        </div>
    );
}

export default SelectRemoveUser;