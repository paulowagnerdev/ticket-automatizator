import "./ShowAccessComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ShowAccessComponent = ({
  accessClicked,
  setAccessClicked,
  setCheckboxClicked,
  setNewProfile,
  setInputValidations
}) => {
  const handleDeleteAccess = (id) => {
    let list = accessClicked;

    list.map((access) => {
      if (access.id == id) {
        list = list.filter((access) => access.id != id);
      }

      handleSetNewProfile(list);
    });

    setAccessClicked(list);
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

  return (
    <div className="div-show-access-component">
      <ul>
        {accessClicked.map((access) => (
          <li key={access.id}>
            {access.name}
            <FontAwesomeIcon
              icon={faXmark}
              id="icon-delete-access"
              onClick={() => handleDeleteAccess(access.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowAccessComponent;
