import * as React from "react";
import { makeStyles } from "@mui/styles";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import AddSongForm from "../../components/AddSongForm/AddSongForm";
import AddDetailsSongForm from "../../components/AddSongForm/AddDetailsSongForm";
import ReviewUploadSong from "../../components/AddSongForm/ReviewUploadSong";

import withLayout from "../../hoc/withLayout";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      maxWidth: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const WallPaper = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  overflow: "hidden",
  background: "linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)",
  transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
  "&:before": {
    content: '""',
    width: "140%",
    height: "140%",
    position: "absolute",
    top: "-40%",
    right: "-50%",
    background:
      "radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)",
  },
  "&:after": {
    content: '""',
    width: "140%",
    height: "140%",
    position: "absolute",
    bottom: "-50%",
    left: "-30%",
    background:
      "radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)",
    transform: "rotate(30deg)",
  },
});

const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: "80%",
  maxWidth: "100%",
  height: 800,
  marginLeft: "12.5%",
  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

const steps = ["Upload file", "Refill details", "Review Song"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddSongForm />;
    case 1:
      return <AddDetailsSongForm />;
    case 2:
      return <ReviewUploadSong />;
    default:
      throw new Error("Unknown step");
  }
}

function AddSong() {
  const [activeStep, setActiveStep] = React.useState(0);

  const classes = useStyles();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const theme = useTheme();

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Widget>
        <div className={classes.layout}>
          <Paper className={classes.paper}>
            <Tooltip
              title={`<Typography color="textPrimary" variant="h4">`}
              placement="top"
              arrow
            >
              <Typography component="h1" variant="h4" align="center">
                Upload Song
              </Typography>
            </Tooltip>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <Tooltip title={`<StepLabel>`} placement="top" arrow>
                    <StepLabel>{label}</StepLabel>
                  </Tooltip>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Tooltip
                    title={`<Typography color="textPrimary" variant="h5">`}
                    placement="left"
                    arrow
                  >
                    <Typography variant="h5" gutterBottom>
                      Thank you for your order.
                    </Typography>
                  </Tooltip>
                  <Tooltip
                    title={`<Typography color="textPrimary" variant="subtitle1">`}
                    placement="left"
                    arrow
                  >
                    <Typography variant="subtitle1">
                      Your order number is #2001539. We have emailed your order
                      confirmation, and will send you an update when your order
                      has shipped.
                    </Typography>
                  </Tooltip>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Tooltip title={`<Button variant="text">`} arrow>
                        <Button onClick={handleBack} className={classes.button}>
                          Back
                        </Button>
                      </Tooltip>
                    )}
                    <Tooltip
                      title={`<Button color="primary" variant="contained">`}
                      arrow
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1
                          ? "Place order"
                          : "Next"}
                      </Button>
                    </Tooltip>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </div>
      </Widget>
      <WallPaper />
    </Box>
  );
}

export default withLayout(AddSong);
