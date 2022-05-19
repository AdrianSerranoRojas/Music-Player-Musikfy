import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Login.scss";
// import { FcGoogle } from "react-icons/fc";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import withLayout from "../../hoc/withLayout";
import { Spinner } from "../../components/Spinner/Spinner";
import { styled } from "@mui/material/styles";
import Paper from '@mui/material/Paper';

  const Scrollable = styled("div")(({ theme }) => ({
    overflowY: "hidden",
    maxWidth: "100%",
    height: "58vh",
    zIndex: 1,
    overflow: "scroll",
  }));

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
          <Card sx={{width:300}}>
            <Typography variant="h3">{dataFetech40list[0]}</Typography>
            <img src="https://res.cloudinary.com/carapolla/image/upload/v1652960856/imagen_2022-05-19_134640629_ik4czo.png" alt="" />
          </Card>
          <Card sx={{width:300}}>
            <Typography variant="h3">{dataFetech40list[1]}</Typography>
            <img src="https://res.cloudinary.com/carapolla/image/upload/v1652960879/imagen_2022-05-19_134638268_newvpy.png" alt="" />
          </Card>
          <Card sx={{width:300}}>
            <Typography variant="h3">{dataFetech40list[2]}</Typography>
            <img src="https://res.cloudinary.com/carapolla/image/upload/v1652960902/imagen_2022-05-19_134526523_oivzbz.png" alt="" />
          </Card>
        </Stack>
        <Stack
          direction={{ xs: 'column' }}
          spacing={2}
          sx={{mt:2, maxWidth:"63.3%"}}
        >
      {dataFetech40list?.length > 0 ? (
        dataFetech40list.map((song, index) => {
          return (
            <>
          <Card sx={{minWidth:300}}>
            <Typography variant="subtitle1">4th</Typography>
            <Typography variant="h6">{song}</Typography>
          </Card>
          </>
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
