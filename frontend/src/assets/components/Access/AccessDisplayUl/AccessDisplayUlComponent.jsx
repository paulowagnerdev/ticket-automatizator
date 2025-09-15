import "./AccessDisplayUlComponent.css";
import { useEffect, useState } from "react";

const AccessDisplayUlComponent = ({
  propSetEnableBtnRemoveAccess,
  refetchTrigger,
  setRemoveAccess,
}) => {
  const [selectAccess, setSelectAccess] = useState({});
  const [access, setAccess] = useState([]);

  useEffect(() => {
    console.log("Carregou")
    const url = "http://localhost:3000/access";
    const getAssyncAcces = async () => {
      try {
        const getAcces = await fetch(url, {
          method: "GET",
        });

        if (!getAcces.ok) {
          console.error("Erro na requisição GET");
        } else {
          const access = await getAcces.json();
          setAccess(access);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getAssyncAcces();
  }, [refetchTrigger]);

  const handleSelectAccess = (id) => {
    const selectedId = Object.keys(selectAccess)[0];

    if (selectedId == id) {
      propSetEnableBtnRemoveAccess(false);
      setSelectAccess({});
    } else {
      propSetEnableBtnRemoveAccess(true);
      setSelectAccess((prev) => ({ ...false, [id]: "selected" }));
      access.map((value) => {
        if (value.id === id) {
          setRemoveAccess(value);
        }
      });
    }
  };

  return (
    <div>
      <ul className="access-display-ul">
        <li>
          <div className="access-display-li-top">
            <span className="access-display-ul-id">Numero</span>
            <span className="access-display-ul-name">Acesso</span>
            <span className="access-display-ul-description">Descrição</span>
          </div>
        </li>
        {access.map((access) => (
          <li
            key={access.id}
            className={`access-display-li  ${
              !!selectAccess[access.id] ? "selected" : ""
            }`}
            onClick={(e) => handleSelectAccess(access.id)}
          >
            <div className="access-display-ul-id">
              <span>{access.id}</span>
            </div>
            <div className="access-display-ul-name">
              <span>{access.name}</span>
            </div>
            <div className="access-display-ul-description">
              <span>{access.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccessDisplayUlComponent;
