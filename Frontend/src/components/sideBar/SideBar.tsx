import { useState, useRef, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { useTheme } from "@mui/material/styles";

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

import navbarList, { navbarListLogout } from "./SideBarData";
import StyledAvatar from "./StyledAvatar";

import ColorMode from "../ColorMode/ColorMode";

import AuthContext from "../../context/AuthContext";

import { userSignOut } from "../../firebase/firebase";

import { setFilterSong, songsSelector } from "../../features/song/songsSlice";

import { useGetUserQuery } from "../../services/userApi";

const drawerWidthOpen = 240;
const paddingIconButton = 10;
const marginIconButton = 14;
const iconFontSize = 20;
const drawerWidthClose =
  (paddingIconButton + marginIconButton) * 2 + iconFontSize;

export default function SideNavbar({ ...props }) {
  async function handleSignOut() {
    await userSignOut();
  }
  const dispatch = useDispatch();
  const { filterSong } = useSelector(songsSelector);

  const currentUser = useContext(AuthContext);
  const { data: user, isSuccess } = useGetUserQuery(currentUser?.uid);

  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const refFocus = useRef();

  function toogleOpen() {
    setOpen(!open);
  }

  function toogleOpenSearch() {
    setOpen(false);
    // setTimeout(() => {
    //   refFocus.current.focus();
    // }, 500);
  }

  const navigate = useNavigate();

  const handleSearch = (filter) => {
    dispatch(setFilterSong(filter));
    console.log(filterSong);
  };

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
        ></Box>
        <Typography
          variant="h1"
          noWrap={true}
          gutterBottom
          sx={{
            display: { xs: "none", sm: "initial" },
            fontSize: "18px",
            fontWeight: 600,
            color:
              theme.palette.mode === "dark"
                ? theme.palette.mode.primary
                : "text.primary",
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
            sx={{
              fontSize: "20px",
              color: open
                ? theme.palette.mode === "dark"
                  ? "text.primary"
                  : "text.primary"
                : "lightGray",
            }}
          ></MenuIcon>
        </Button>
      </Box>
      {currentUser ? (
        <List dense={true}>
          {navbarList.map((key, index) => (
            <div key={index}>
              {index === 0 ? (
                <div key={index}>
                  <Tooltip
                    key={`1+${key.key + index}`}
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
                      key={`2+${key.key + index}`}
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
                        key={`3+${key.key + index}`}
                      >
                        <Badge
                          key={`4+${key.key + index}`}
                          badgeContent={key.badge}
                          color="secondary"
                          variant="dot"
                        >
                          <key.icon
                            key={`5+${key.key + index}`}
                            sx={{
                              fontSize: "20px",
                              color:
                                theme.palette.mode === "dark"
                                  ? "text.primary"
                                  : "text.primary",
                            }}
                          />
                        </Badge>
                      </ListItemIcon>

                      <InputBase
                        key={`6+${key.key + index}`}
                        onChange={(e) => handleSearch(e.target.value)}
                        inputRef={refFocus}
                        margin="dense"
                        fullWidth={true}
                        placeholder={key.desc}
                        sx={{
                          fontSize: "0.875rem",
                          lineHeight: "1.43em",
                          "& .MuiInputBase-input": {
                            color: "gray",
                            padding: 0,
                          },
                        }}
                      ></InputBase>
                    </ListItemButton>
                  </Tooltip>
                  <Divider
                    variant="middle"
                    light={true}
                    key={`7+${key.key + index}`}
                  />
                </div>
              ) : (
                <Tooltip
                  key={`8+${key.key + index}`}
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
                >
                  <ListItemButton
                    sx={{
                      margin: "6px 14px",
                      padding: "10px",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "#26284687",
                      },
                    }}
                    onClick={() => navigate(`${key.path}`)}
                  >
                    <ListItemIcon
                      key={`10+${key.key + index}`}
                      sx={{ minWidth: "46px" }}
                    >
                      <Badge
                        key={`11+${key.key + index}`}
                        badgeContent={key.badge}
                        color="secondary"
                        variant="dot"
                      >
                        <key.icon
                          key={`12+${key.key + index}`}
                          sx={{
                            fontSize: "20px",
                            color:
                              theme.palette.mode === "dark"
                                ? "text.primary"
                                : "text.primary",
                          }}
                        />
                      </Badge>
                    </ListItemIcon>

                    <ListItemText
                      key={`13+${key.key + index}`}
                      primary={key.desc}
                      primaryTypographyProps={{
                        variant: "body2",
                      }}
                      sx={{
                        display: "inline",
                        margin: "0px",
                        overflowX: "hidden",
                        color:
                          theme.palette.mode === "dark"
                            ? "text.primary"
                            : "text.primary",
                        whiteSpace: "nowrap",
                        minWidth: "126px",
                      }}
                    />
                    {key.badge !== 0 ? (
                      <Chip
                        key={`14+${key.key + index}`}
                        label={key.badge}
                        color={"secondary"}
                        size="small"
                        sx={{ height: "auto" }}
                      />
                    ) : (
                      <div key={index}></div>
                    )}
                  </ListItemButton>
                </Tooltip>
              )}
            </div>
          ))}
          <Divider key={123} variant="middle" light={true} />
        </List>
      ) : (
        <List dense={true}>
          {navbarListLogout.map((key, index) => (
            <div key={index}>
              {index === 0 ? (
                <div key={index}>
                  <Tooltip
                    key={`1+${key.key + index}`}
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
                      key={`2+${key.key + index}`}
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
                        key={`3+${key.key + index}`}
                      >
                        <Badge
                          key={`4+${key.key + index}`}
                          badgeContent={key.badge}
                          color="secondary"
                          variant="dot"
                        >
                          <key.icon
                            key={`5+${key.key + index}`}
                            sx={{
                              fontSize: "20px",
                              color:
                                theme.palette.mode === "dark"
                                  ? "text.primary"
                                  : "text.primary",
                            }}
                          />
                        </Badge>
                      </ListItemIcon>

                      <InputBase
                        key={`6+${key.key + index}`}
                        inputRef={refFocus}
                        margin="dense"
                        fullWidth={true}
                        placeholder={key.desc}
                        sx={{
                          fontSize: "0.875rem",
                          lineHeight: "11.43em",
                          "& .MuiInputBase-input": {
                            color:
                              theme.palette.mode === "dark"
                                ? "text.primary"
                                : "text.primary",
                            padding: 0,
                          },
                        }}
                      ></InputBase>
                    </ListItemButton>
                  </Tooltip>
                  <Divider
                    variant="middle"
                    light={true}
                    key={`7+${key.key + index}`}
                  />
                </div>
              ) : (
                <Tooltip
                  key={`8+${key.key + index}`}
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
                >
                  <ListItemButton
                    sx={{
                      margin: "6px 14px",
                      padding: "10px",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "#26284687",
                      },
                    }}
                    onClick={() => navigate(`${key.path}`)}
                  >
                    <ListItemIcon
                      key={`10+${key.key + index}`}
                      sx={{ minWidth: "46px" }}
                    >
                      <Badge
                        key={`11+${key.key + index}`}
                        badgeContent={key.badge}
                        color="secondary"
                        variant="dot"
                      >
                        <key.icon
                          key={`12+${key.key + index}`}
                          sx={{
                            fontSize: "20px",
                            color:
                              theme.palette.mode === "dark"
                                ? "text.primary"
                                : "text.primary",
                          }}
                        />
                      </Badge>
                    </ListItemIcon>

                    <ListItemText
                      key={`13+${key.key + index}`}
                      primary={key.desc}
                      primaryTypographyProps={{
                        variant: "body2",
                      }}
                      sx={{
                        display: "inline",
                        margin: "0px",
                        overflowX: "hidden",
                        color:
                          theme.palette.mode === "dark"
                            ? "text.primary"
                            : "text.primary",
                        whiteSpace: "nowrap",
                        minWidth: "126px",
                      }}
                    />
                    {key.badge !== 0 ? (
                      <Chip
                        key={`14+${key.key + index}`}
                        label={key.badge}
                        color={"secondary"}
                        size="small"
                        sx={{ height: "auto" }}
                      />
                    ) : (
                      <div key={index}></div>
                    )}
                  </ListItemButton>
                </Tooltip>
              )}
            </div>
          ))}
          <Divider key={123} variant="middle" light={true} />
        </List>
      )}
      <ColorMode />
      <IconButton sx={{ borderRadius: 0, p: 3 }} onClick={handleSignOut}>
        <ExitToAppIcon></ExitToAppIcon>
      </IconButton>
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
        <Box
          sx={{
            display: "flex",
            marginRight: "18px",
            paddingLeft: "0px",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <StyledAvatar
            currentUser={currentUser}
            imageURL={user?.data?.image?.url}
          />
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
              color:
                theme.palette.mode === "dark" ? "text.primary" : "text.primary",
            }}
          >
            {currentUser
              ? currentUser.email.substring(
                  0,
                  currentUser.email.lastIndexOf("@")
                )
              : "Not logged in"}
          </Typography>
          <Typography
            component="span"
            variant="body2"
            sx={{
              display: "block",
              whiteSpace: "nowrap",
              lineHeight: "inherit",
              color:
                theme.palette.mode === "dark" ? "text.primary" : "text.primary",
            }}
          >
            {currentUser ? "Logged in" : ""}
          </Typography>
        </Box>
      </Box>
    </>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="main"
        sx={{
          backgroundColor: "transparent",
          padding: "8px",
          margin: "10px 5px ",
          top: "0",
          position: "absolute",
          zIndex: "200",
          color: "white",
        }}
      >
        <Switch
          checked={open}
          onChange={() => setOpen((prevOpen) => !prevOpen)}
          // sx={{        color: "red",
          // }}
        ></Switch>
      </Box>
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
    </Box>
  );
}
