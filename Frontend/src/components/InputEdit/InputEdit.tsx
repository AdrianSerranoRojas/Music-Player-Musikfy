import { useRef, useEffect } from "react";

function InputEdit({ value, setEditUser, setIsEditing, control, editUser }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };
  return (
    <form action="" className="inputForm">
      <input
        type="text"
        placeholder={value}
        onChange={(e) => setEditUser(editUser =>({...editUser, [control]: e.target.value }))}
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
