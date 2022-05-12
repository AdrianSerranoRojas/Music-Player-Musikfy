import EditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { useState } from "react";
import { IconButton } from "@mui/material";
import Form from "react-bootstrap/Form";


function EditInfoSelect({ value, setEditUser, control, editUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = () => setIsEditing(true);
  return (
    <div className="EditInfoContainer">
      {isEditing ? (
        <Form.Select aria-label="Default select example">
          <option>Select your gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="O">Other</option>
        </Form.Select>
      ) : (
        <>
          <h4 className="profileData">{value}</h4>
          <IconButton onClick={toggleEditing}>
            <EditOutlinedIcon />
          </IconButton>
        </>
      )}
    </div>
  );
}

export default EditInfoSelect;
