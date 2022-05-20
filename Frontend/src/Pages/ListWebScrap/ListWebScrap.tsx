import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Login.scss";
// import { FcGoogle } from "react-icons/fc";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import withLayout from "../../hoc/withLayout";
import { Spinner } from "../../components/Spinner/Spinner";
import { styled } from "@mui/material/styles";
import Paper from '@mui/material/Paper';
import "./ListWebScrap.scss";

  const Scrollable = styled("div")(({ theme }) => ({
    overflowY: "hidden",
    maxWidth: "100%",
    height: "58vh",
    zIndex: 1,
    overflow: "scroll",
  }));

function ListWebScrap() {
  const [dataFetech40list, setDataFetech40list] = useState([]);
  const [notWinners, setNotWinners] = useState([]);

  const handleFetchWebScrap = async () => {
    await fetch("http://localhost:4000/40lists")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDataFetech40list(data.data);
        setNotWinners(data.data.slice(3,40));
        console.log(dataFetech40list);
      });
  };
  useEffect(() => {
    handleFetchWebScrap();
  },[]);

  return (
    <>
      <Typography variant="h2">Best Songs 40 Principales</Typography>
      <hr />
      {/* <Button onClick={handleFetchWebScrap}> fetch listWebScrap</Button> */}
      {/* !dataSa && <div>no existo</div>) */}
      <Scrollable>
      <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
        >
          <Card sx={{width:"33.3%"}}>
            <Typography variant="h3" align="center">{dataFetech40list[0]}</Typography>
            <div className="centerImg">
              <img src="" alt="1" />
            </div>
          </Card>
          <Card sx={{width:"33.3%"}}>
            <Typography variant="h3" align="center">{dataFetech40list[1]}</Typography>
            <div className="centerImg">
              <img src="" alt="2" />
            </div>
          </Card>
          <Card sx={{width:"33.3%"}}>
            <Typography variant="h3" align="center">{dataFetech40list[2]}</Typography>
            <div className="centerImg">
              <img src="" alt="3" />
            </div>
          </Card>
        </Stack>
        <Stack
          direction={{ xs: 'column' }}
          spacing={2}
          sx={{mt:2, maxWidth:"100%"}}
        >
      {dataFetech40list?.length > 0 ? (
        notWinners.map((song, index) => {
          return (
          <Card key={index} sx={{Width: "100%"}}>
            <Typography variant="subtitle1">{index + 4}th</Typography>
            <Typography variant="h6">{song}</Typography>
          </Card>
          );
        })
      ) : (
        <Spinner />
      )}
      </Stack>
      </Scrollable>
    </>
  );
}

export default withLayout(ListWebScrap);
