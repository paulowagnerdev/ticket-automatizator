import './SelectBranchComponent.css';

const SelectBranchComponent = () => {

    const branch = [
        {id: 1, name: ""},
        {id: 2, name: "Transligue Filial Joinville"},
        {id: 3, name: "Transligue Filial Campinas"},
        {id: 4, name: "Transligue Filial São Paulo"},
        {id: 5, name: "Transligue Filial Itajaí"},
        {id: 6, name: "Transligue Matriz"},
        {id: 7, name: "Transligue Filial São José"},
        {id: 8, name: "Transligue Filial  São José dos Pinhais"},
        {id: 9, name: "Transligue Filial Blumenau"},
        {id: 10, name: "Transligue Filial Guaramirim"},
    ]

    return (
        <>
            <div className='branch-div'>
                <label>Selecione a Filial:</label>
                <select name="select-branch" id='branch-select'>
                    {
                        branch.map((branch) => (
                            <option value={branch.id}>{branch.name}</option>
                        ))
                    }
                    </select>
            </div>
        </>
    )
}

export default SelectBranchComponent;