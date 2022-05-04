import DashboardOutlined from "@mui/icons-material/DashboardOutlined";
import Person from "@mui/icons-material/Person";
import Forum from "@mui/icons-material/Forum";
import Analytics from "@mui/icons-material/Analytics";
import FolderOpen from "@mui/icons-material/FolderOpen";
import BorderColor from "@mui/icons-material/BorderColor";
import Search from "@mui/icons-material/Search";



const navbarList = [
  {
    icon: Search,
    desc: "Search",
    secondDesc: "",
    badge: 0,
    subList: [],
    path: "/home",
  },
  {
    icon: DashboardOutlined,
    desc: "Dashboard",
    secondDesc: "",
    badge: 0,
    subList: [],
    path: "/home",
  },
  {
    icon: Person,
    desc: "User",
    secondDesc: "",
    badge: 5,
    subList: [],
    path: "/profile",
  },
  {
    icon: Forum,
    path: "/home",
    desc: "Forum",
    secondDesc: "Message from andi",
    badge: 1,
    subList: [
      {
        desc: "chat",
        badge: 2,
      },
      {
        desc: "reminder",
        badge: 0,
      },
    ],
  },
  {
    icon: Analytics,
    path: "/home",
    desc: "Analytics",
    secondDesc: "",
    badge: 0,
    subList: [],
  },
  {
    icon: FolderOpen,
    path: "/home",
    desc: "Folder",
    secondDesc: "",
    badge: 0,
    subList: [],
  },
  {
    icon: BorderColor,
    path: "/home",
    desc: "Edit",
    secondDesc: "",
    badge: 0,
    subList: [],
  },
];

export default navbarList;
