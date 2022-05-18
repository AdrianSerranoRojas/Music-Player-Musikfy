import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Login.scss";
// import { FcGoogle } from "react-icons/fc";
import { Button } from "@mui/material";
import withLayout from "../../hoc/withLayout";
import { Spinner } from "../../components/Spinner/Spinner";

function ListWebScrap() {
  const [dataFetech40list, setDataFetech40list] = useState([]);

  const handleFetchWebScrap = async () => {
    await fetch("http://localhost:4000/40lists")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDataFetech40list(data.data);
        console.log(dataFetech40list);
      });
  };
  useEffect(() => {
    handleFetchWebScrap();
  },[]);
  return (
    <div className="container p-4 mt-5">
      <h2>listWebScrap</h2>
      {/* <Button onClick={handleFetchWebScrap}> fetch listWebScrap</Button> */}
      {/* !dataSa && <div>no existo</div>) */}

      {dataFetech40list?.length > 0 ? (
        dataFetech40list.map((song, index) => {
          return <div key={index}> {song} </div>;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default withLayout(ListWebScrap);
