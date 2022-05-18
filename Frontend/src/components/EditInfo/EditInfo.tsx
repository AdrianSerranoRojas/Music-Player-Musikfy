import EditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

import { useState } from "react";

import { IconButton } from "@mui/material";

import InputEdit from "../InputEdit/InputEdit";

import "./EditInfo.scss";

function EditInfo({ value, setEditUser, control, editUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = () => setIsEditing(true);
  return (
    <div className="EditInfoContainer">
      {isEditing ? (
        <InputEdit
          disabled={false}
          value={value}
          setEditUser={setEditUser}
          setIsEditing={setIsEditing}
          control={control}
          editUser={editUser}
        />
      ) : (
        <>
          <InputEdit
            disabled
            value={value}
            setEditUser={setEditUser}
            setIsEditing={setIsEditing}
            control={control}
            editUser={editUser}
          />
          <IconButton onClick={toggleEditing}>
            <EditOutlinedIcon />
          </IconButton>
        </>
      )}
    </div>
  );
}

export default EditInfo;
