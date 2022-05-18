import { useState, useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Login.scss";
// import { FcGoogle } from "react-icons/fc";
import { Button } from "@mui/material";
import withLayout from "../../hoc/withLayout";


function ListWebScrap() {

  const [dataFetech40list, setDataFetech40list] = useState(null);

  const handleFetchWebScrap = async () => {
    await fetch("http://localhost:4000/40lists")
      .then((response) => response.json())
      .then((data) => {
        setDataFetech40list(data);
      });
  };

  // useEffect(() => {}, []);

  return (
    <div className="container p-4 mt-5">
      <h2>listWebScrap</h2>
      <Button onClick={handleFetchWebScrap}> fetch listWebScrap</Button>
      {/* !dataSa && <div>no existo</div>) */}

      {/* {(dataFetech40list ==! null)
        ? dataFetech40list.map((song, index) => {
            return <div> osita </div>;
          })
        : null} */}
    </div>
  );
}

export default withLayout(ListWebScrap);
