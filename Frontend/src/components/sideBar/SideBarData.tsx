import DashboardOutlined from "@mui/icons-material/DashboardOutlined";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import Person from "@mui/icons-material/Person";
import Search from "@mui/icons-material/Search";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";

const navbarList = [
  {
    key: 1,
    icon: Search,
    desc: "Search",
    secondDesc: "",
    badge: 0,
    subList: [],
  },
  {
    key: 2,
    icon: DashboardOutlined,
    desc: "Dashboard",
    secondDesc: "",
    badge: 0,
    subList: [],
    path: "/",
  },
  {
    key: 3,
    icon: Person,
    desc: "Profile",
    secondDesc: "",
    badge: 0,
    subList: [],
    path: "/profile",
  },
  // {
  //   key: 4,
  //   icon: LockIcon,
  //   path: "/changePassword",
  //   desc: "Change Password",
  //   secondDesc: "",
  //   badge: 0,
  //   subList: [],
  // },
  {
    key: 5,
    icon: LibraryMusicIcon,
    path: "/favoriteSongs",
    desc: "Liked Songs",
    secondDesc: "",
    badge: 0,
    subList: [],
  },
  // {
  //   key: 6,
  //   icon: Analytics,
  //   path: "/",
  //   desc: "Top Ten",
  //   secondDesc: "",
  //   badge: 0,
  //   subList: [],
  // },
  // {
  //   key: 7,
  //   icon: FolderOpen,
  //   path: "/",
  //   desc: "Folder",
  //   secondDesc: "",
  //   badge: 0,
  //   subList: [],
  // },
  {
    key: 8,
    icon: PlaylistPlayIcon,
    path: "/Playlist",
    desc: "Playlists",
    secondDesc: "",
    badge: 0,
    subList: [],
  },
  {
    key: 8,
    icon: PlaylistPlayIcon,
    path: "/mySongs",
    desc: "My songs",
    secondDesc: "",
    badge: 0,
    subList: [],
  },
  // {
  //   key: 9,
  //   icon: Forum,
  //   path: "/filter",
  //   desc: "Filter",
  //   secondDesc: "",
  //   badge: 0,
  //   subList: [],
  // },
];

export const navbarListLogout = [
  {
    key: 1,
    icon: Search,
    desc: "Search",
    secondDesc: "",
    badge: 0,
    subList: [],
  },
  {
    key: 2,
    icon: Person,
    desc: "Register",
    secondDesc: "",
    badge: 0,
    subList: [],
    path: "/signUp",
  },
  {
    key: 3,
    icon: VpnKeyIcon,
    desc: "Login",
    secondDesc: "",
    badge: 0,
    subList: [],
    path: "/login",
  },
];

export default navbarList;
