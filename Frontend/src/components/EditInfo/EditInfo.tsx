import { MdOutlineEdit } from "react-icons/md";
import { useState } from "react";
import InputEdit from "../InputEdit/InputEdit";
import "./EditInfo.scss";

function EditInfo({ value, setEditUser, control, editUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = () => setIsEditing(true);
  return (
    <div className="EditInfoContainer">
      {isEditing ? (
        <InputEdit
          value={value}
          setEditUser={setEditUser}
          setIsEditing={setIsEditing}
          control={control}
          editUser={editUser}
        />
      ) : (
        <>
          <h4 className="profileData">{value}</h4>
          <button onClick={toggleEditing}>
            <MdOutlineEdit />
          </button>
        </>
      )}
    </div>
  );
}

export default EditInfo;
