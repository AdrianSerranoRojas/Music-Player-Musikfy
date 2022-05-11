import DashboardOutlined from "@mui/icons-material/DashboardOutlined";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import HomeIcon from "@mui/icons-material/Home";
import Person from "@mui/icons-material/Person";
import Forum from "@mui/icons-material/Forum";
import Analytics from "@mui/icons-material/Analytics";
import FolderOpen from "@mui/icons-material/FolderOpen";
import BorderColor from "@mui/icons-material/BorderColor";
import Search from "@mui/icons-material/Search";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LockIcon from "@mui/icons-material/Lock";
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
  {
    key: 4,
    icon: LockIcon,
    path: "/changePassword",
    desc: "Change Password",
    secondDesc: "",
    badge: 0,
    subList: [],
  },
  {
    key: 5,
    icon: LibraryMusicIcon,
    path: "/addSong",
    desc: "Add Song",
    secondDesc: "",
    badge: 1,
    subList: [],
  },
  {
    key: 6,
    icon: Analytics,
    path: "/",
    desc: "Top Ten",
    secondDesc: "",
    badge: 0,
    subList: [],
  },
  {
    key: 7,
    icon: FolderOpen,
    path: "/",
    desc: "Folder",
    secondDesc: "",
    badge: 0,
    subList: [],
  },
  {
    key: 8,
    icon: PlaylistPlayIcon,
    path: "/Playlist",
    desc: "Playlist",
    secondDesc: "",
    badge: 5,
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
  {
    key: 9,
    icon: Forum,
    path: "/filter",
    desc: "Filter",
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
