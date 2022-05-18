import { TextField } from "@mui/material";

function InputEdit({
  value,
  setEditUser,
  setIsEditing,
  control,
  editUser,
  disabled,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };
  return (
    <form action="" className="inputForm">
      <TextField
        disabled={disabled}
        type="text"
        placeholder={value}
        onChange={(e) =>
          setEditUser((editUser) => ({
            ...editUser,
            [control]: e.target.value,
          }))
        }
        onBlur={() => setIsEditing(false)}
      />
      <button
        type="submit"
        style={{ display: "none" }}
        onClick={handleSubmit}
        name=""
        value=""
      />
    </form>
  );
}

export default InputEdit;
