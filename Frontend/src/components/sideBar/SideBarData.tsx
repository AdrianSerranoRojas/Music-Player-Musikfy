import DashboardOutlined from "@mui/icons-material/DashboardOutlined";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import HomeIcon from '@mui/icons-material/Home';
import Person from "@mui/icons-material/Person";
import Forum from "@mui/icons-material/Forum";
import Analytics from "@mui/icons-material/Analytics";
import FolderOpen from "@mui/icons-material/FolderOpen";
import BorderColor from "@mui/icons-material/BorderColor";
import Search from "@mui/icons-material/Search";
import VpnKeyIcon from '@mui/icons-material/VpnKey';

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
    desc: "User",
    secondDesc: "",
    badge: 5,
    subList: [],
    path: "/profile",
  },
  {
    key: 4,
    icon: Forum,
    path: "/addSong",
    desc: "Forum",
    secondDesc: "Message from Bob",
    badge: 1,
    subList: [],
  },
  {
    key: 5,
    icon: Analytics,
    path: "/",
    desc: "Analytics",
    secondDesc: "",
    badge: 0,
    subList: [],
  },
  {
    key: 6,
    icon: FolderOpen,
    path: "/",
    desc: "Folder",
    secondDesc: "",
    badge: 0,
    subList: [],
  },
  {
    key: 7,
    icon: BorderColor,
    path: "/",
    desc: "Edit",
    secondDesc: "",
    badge: 0,
    subList: [],
  },
  {
    key: 8,
    icon: BorderColor,
    path: "/signUp",
    desc: "Sign Up",
    secondDesc: "",
    badge: 0,
    subList: [],
  },
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
    icon: DashboardOutlined,
    desc: "Login",
    secondDesc: "",
    badge: 0,
    subList: [],
    path: "/login",
  },
  {
    key: 3,
    icon: Person,
    desc: "User",
    secondDesc: "",
    badge: 5,
    subList: [],
    path: "/signUp",
  },
];

export default navbarList;
