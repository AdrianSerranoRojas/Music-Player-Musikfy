import * as React from "react";
import { useState, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import Logo from "./Logo.js";
import navbarList from "./SideBarData";
import StyledAvatar from "./StyledAvatar";

import ColorMode from "../ColorMode/ColorMode";

const drawerWidthOpen = 240;
const paddingIconButton = 10;
const marginIconButton = 14;
const iconFontSize = 20;
const drawerWidthClose =
  (paddingIconButton + marginIconButton) * 2 + iconFontSize;

export default function SideNavbar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const refFocus = useRef();

  function toogleOpen() {
    setOpen(!open);
  }

  function toogleOpenSearch() {
    setOpen(false);
    setTimeout(() => {
      refFocus.current.focus();
    }, 500);
  }

  const navigate = useNavigate();

  const drawerContent = (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "42px",
          width: "auto",
          backgroundColor: "transparent",
          margin: "14px 14px",
          padding: "12px 0px",
          borderBottom: "1px solid lightgray",
          alignItems: "flex-end",
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            display: open ? "none" : { xs: "none", sm: "initial" },
            marginBottom: "9px",
          }}
        >
          <Logo />
        </Box>
        <Typography
          variant="h1"
          noWrap={true}
          gutterBottom
          sx={{
            display: { xs: "none", sm: "initial" },
            fontSize: "18px",
            fontWeight: 600,
            color: "lightgray",
            width: "154px",
            marginLeft: open ? "0px" : "8px",
            paddingBottom: "3px",
          }}
        >
          Musikfy
        </Typography>

        <Button
          onClick={toogleOpen}
          sx={{
            minWidth: "initial",
            padding: "10px",
            color: "gray",
            borderRadius: "8px",
            backgroundColor: open ? "transparent" : "transparent",
            "&:hover": {
              backgroundColor: "#26284687",
            },
          }}
        >
          <MenuIcon
            sx={{ fontSize: "20px", color: open ? "lightgray" : "lightGray" }}
          ></MenuIcon>
        </Button>
      </Box>

      <List dense={true} >
        {navbarList.map((key, index) => (
          <>
        {/* {index === 0 ? (
              <>
                <Tooltip
                  key={`1+${key.keye}`}
                  title={open ? key.desc : ""}
                  placement={"right"}
                  componentsProps={{
                    tooltip: {
                      sx: {
                        backgroundColor: "gray",
                        color: "white",
                        marginLeft: "22px !important",
                        boxShadow: "0px 0px 22px -2px rgba(0,0,0,0.20)",
                      },
                    },
                  }}
                >
                  <ListItemButton
                    key={`2+${key.keye}`}
                    onClick={toogleOpenSearch}
                    sx={{
                      margin: "6px 14px",
                      padding: "10px",
                      borderRadius: "8px",
                      backgroundColor: "#26284687",
                    }}
                  >
                    <ListItemIcon
                      sx={{ minWidth: "46px" }}
                      key={`3+${key.keye}`}
                    >
                      <Badge
                        key={`4+${key.keye}`}
                        badgeContent={key.badge}
                        color="secondary"
                        variant="dot"
                      >
                        <key.icon
                          key={`5+${key.keye}`}
                          sx={{ fontSize: "20px", color: "lightgray" }}
                        />
                      </Badge>
                    </ListItemIcon>

                    <InputBase
                      key={`6+${key.keye}`}
                      inputRef={refFocus}
                      margin="dense"
                      fullWidth={true}
                      placeholder={key.desc}
                      sx={{
                        fontSize: "0.875rem",
                        lineHeight: "1.43em",
                        "& .MuiInputBase-input": {
                          color: "lightgray",
                          padding: 0,
                        },
                      }}
                      componentsProps={{
                        input: {
                          sx: {
                            padding: 0,
                          },
                        },
                      }}
                    ></InputBase>
                  </ListItemButton>
                </Tooltip>
                <Divider variant="middle" light={true} key={`7+${key.keye}`} />
              </>
            ) : ( */}
        {/* <Tooltip
                key={`8+${key.keye}`}
                title={open ? key.desc : ""}
                placement={"right"}
                componentsProps={{
                  tooltip: {
                    sx: {
                      backgroundColor: "secondary",
                      color: "white",
                      marginLeft: "22px !important",
                      boxShadow: "0px 0px 22px -2px rgba(0,0,0,0.20)",
                    },
                  },
                }}
              > */}
        {/* <ListItemButton
                  key={`9+${key.keye}`}
                  sx={{
                    margin: "6px 14px",
                    padding: "10px",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "#26284687",
                    },
                  }}
                  onClick={() => navigate(`${key.path}`)}
                > */}
        {/* <ListItemIcon
                    key={`10+${key.keye}`}
                    sx={{ minWidth: "46px" }}
                  >
                    <Badge
                      key={`11+${key.keye}`}
                      badgeContent={key.badge}
                      color="secondary"
                      variant="dot"
                    >
                      <key.icon
                        key={`12+${key.keye}`}
                        sx={{ fontSize: "20px", color: "lightgray" }}
                      />
                    </Badge>
                  </ListItemIcon> */}

        {/* <ListItemText
                    key={`13+${key.keye}`}
                    primary={key.desc}
                    primaryTypographyProps={{
                      variant: "body2",
                    }}
                    sx={{
                      display: "inline",
                      margin: "0px",
                      overflowX: "hidden",
                      color: "lightgray",
                      whiteSpace: "nowrap",
                      minWidth: "126px",
                    }}
                  /> */}
        {/* {key.badge !== 0 ? (
                    <Chip
                      key={`14+${key.keye}`}
                      label={key.badge}
                      color={"secondary"}
                      size="small"
                      sx={{ height: "auto" }}
                    />
                  ) : (
                    <></>
                  )} */}
        {/* </ListItemButton> */}
        {/* </Tooltip> */}
        {/* )} */}
        </>
        ))}
        {/* <Divider key={123} variant="middle" light={true} /> */}
      </List>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          alignContents: "center",
          margin: "14px 14px",
          padding: "12px 4px",
          borderTop: "1px solid lightgray",
        }}
      >
        <ColorMode />
        <Box
          sx={{
            display: "flex",
            marginRight: "18px",
            paddingLeft: "0px",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <StyledAvatar />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Typography
            component="span"
            variant="body2"
            sx={{
              fontFamily: "inherit",
              display: "block",
              whiteSpace: "nowrap",
              lineHeight: "inherit",
              fontWeight: 500,
              color: "lightgray",
            }}
          >
            Usuario
          </Typography>
          <Typography
            component="span"
            variant="body2"
            sx={{
              display: "block",
              whiteSpace: "nowrap",
              lineHeight: "inherit",
              color: "lightgray",
            }}
          >
            Web Designer
          </Typography>
        </Box>
        <IconButton sx={{ color: "ligthgray" }}>
          <ExitToAppIcon />
        </IconButton>
      </Box>
    </>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open
            ? { xs: "0px", sm: drawerWidthClose }
            : { xs: drawerWidthClose, sm: drawerWidthOpen },
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: open
              ? theme.transitions.duration.leavingScreen
              : theme.transitions.duration.enteringScreen,
          }),
          "& .MuiDrawer-paper": {
            justifyContent: "space-between",
            overflowX: "hidden",
            width: open
              ? { xs: "0px", sm: drawerWidthClose }
              : { xs: drawerWidthClose, sm: drawerWidthOpen },
            borderRight: "0px",
            borderRadius: "0px 16px 16px 0px",
            boxShadow: theme.shadows[8],
            backgroundColor: open ? "secondary" : "secondary",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: open
                ? theme.transitions.duration.leavingScreen
                : theme.transitions.duration.enteringScreen,
            }),
          },
        }}
      >
        {drawerContent}
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: "lightblue",
          padding: "8px",
          margin: "6px 14px",
        }}
      >
        <Typography>Toggle Button</Typography>
        <Switch
          checked={open}
          onChange={() => setOpen((prevOpen) => !prevOpen)}
        ></Switch>
      </Box>
    </Box>
  );
}
