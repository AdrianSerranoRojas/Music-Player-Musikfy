import { useRef, useEffect } from "react";


function InputEdit({value}){
    const handleSubmit = () => console.log("cambiar user value del redux")
    return(
    <form action="" className="inputForm">
        <input
        type="text"
        placeholder={value}
        />
        <button
        type="submit"
        style={{ display: "none" }}
        onClick={handleSubmit}
        name=""
        value=""
        />
  </form>)
}

export default InputEdit;