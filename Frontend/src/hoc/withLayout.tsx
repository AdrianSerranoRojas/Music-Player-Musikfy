import SideBar from "../components/sideBar/SideBar";

// import PlayerH5 from "../components/PlayerH5/PlayerH5";
import Switch from "@mui/material/Switch";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

import "./withLayout.scss";

const Widget = styled("div")(({ theme }) => ({
  overflowY: "hidden",
  padding: 10,
  borderRadius: 16,
  width: "80%",
  maxWidth: "100%",
  height: "72vh",
  marginTop: "2.5%",
  marginLeft: "12.5%",
  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

const WallPaper = styled("div")(({ theme }) => ({
  // zIndex: -999,
  position: "absolute",
  overflow: "hidden",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(#051328 0%, #142504 100%)"
      : "linear-gradient(rgb(149, 81, 114) 0%, rgb(174, 108, 97) 100%)",

  transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
  "&:before": {
    content: '""',
    width: "140%",
    height: "140%",
    position: "absolute",
    top: "-40%",
    right: "-50%",
    background:
      "radial-gradient(at center center, rgb(28, 34, 92) 0%, rgba(62, 78, 249, 0) 64%)",
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
}));

function getDisplayName(WrappedComponent: any) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}
function withLayout(WrappedComponent: any) {
  WrappedComponent.displayName = `withLayout(${getDisplayName(
    WrappedComponent
  )})`;
  function WrapperComponent({ ...props }) {
    return (
      <>
        <Card className="transparent">
          <Widget>
            <WrappedComponent {...props} />
          </Widget>
        </Card>
        <SideBar />
        <WallPaper />
      </>
    );
  }
  return WrapperComponent;
}
export default withLayout;
