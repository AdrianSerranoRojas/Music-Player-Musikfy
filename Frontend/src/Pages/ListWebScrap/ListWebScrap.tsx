import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Login.scss";
// import { FcGoogle } from "react-icons/fc";
import { Box, Button, Stack } from "@mui/material";
import withLayout from "../../hoc/withLayout";
import { Spinner } from "../../components/Spinner/Spinner";
import styled from "@mui/styles/styled";
import Paper from '@mui/material/Paper';

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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="container p-4 mt-5">
      <h2>listWebScrap</h2>
      <Box sx={{ width: '100%' }}>
      <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </Box>
      {/* <Button onClick={handleFetchWebScrap}> fetch listWebScrap</Button> */}
      {/* !dataSa && <div>no existo</div>) */}

      {dataFetech40list?.length > 0 ? (
        dataFetech40list.map((song, index) => {
          return (
            <>
          <div
            key={index}> {song}
          </div>
          </>
          );
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default withLayout(ListWebScrap);
