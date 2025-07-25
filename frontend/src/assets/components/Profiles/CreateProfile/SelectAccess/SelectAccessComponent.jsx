import { useEffect, useState } from "react";
import "./SelectAccessComponent.css";

const SelectAccessComponent = ({
  setInputValidations,
  accessClicked,
  setAccessClicked,
  setNewProfile,
  checkboxClicked,
  setCheckboxClicked,
}) => {
  const [selectAccess, setSelectAcces] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/access";
    async function getAccess() {
      try {
        const getAccess = await fetch(url, {
          method: "GET",
        });

        if (getAccess.ok) {
          const data = await getAccess.json();
          setSelectAcces(data);
        }
      } catch (err) {
        console.error(err);
      }
    }
    getAccess();
  }, []);

  const handleCheckbox = (id, name) => {
    let temporaryAccess = [...accessClicked];

    const verifyAccess = temporaryAccess.some((access) => access.id === id);

    if (verifyAccess) {
      temporaryAccess = temporaryAccess.filter((access) => access.id !== id);
    } else {
      temporaryAccess.push({ id: id, name: name });
    }

    setAccessClicked(temporaryAccess);
    handleSetNewProfile(temporaryAccess);
    setCheckboxDisplay(id);
  };

  const handleSetNewProfile = (listAccess) => {
    setNewProfile((prev) => ({
      ...prev,
      access: listAccess,
    }));

    validCheckbox(listAccess);
  };

  const validCheckbox = (accessList) => {
    if (accessList.length >= 1) {
      setInputValidations((prev) => ({
        ...prev,
        checkBox: true,
      }));
    } else {
      setInputValidations((prev) => ({
        ...prev,
        checkBox: false,
      }));
    }
  };

  const setCheckboxDisplay = (id) => {
    setCheckboxClicked((prev) => {
      if (prev[id]) {
        const obj = { ...prev };
        delete obj[id];
        return obj;
      } else {
        return { ...prev, [id]: id };
      }
    });
  };
  return (
    <>
      <div className="div-select-access">
        <div className="div-select-access-title">Selecione os Acessos:</div>
        <ul>
          {selectAccess.map((access) => (
            <li key={access.id}>
              <input
                type="checkbox"
                checked={!!checkboxClicked[access.id]}
                onChange={(e) => handleCheckbox(access.id, access.name)}
                id="input-checkbox-selected-access"
              />
              <span>{access.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SelectAccessComponent;
