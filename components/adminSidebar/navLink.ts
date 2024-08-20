import { RiDashboardFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { GiDeliveryDrone } from "react-icons/gi";
import { BsGraphUp } from "react-icons/bs";
import { FaMap } from "react-icons/fa";
export const navlink = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: RiDashboardFill,
  },
  {
    title: "User",
    href: "/admin/user",
    icon: FaUser,
  },
  {
    title: "Drone",
    href: "/admin/drone",
    icon: GiDeliveryDrone,
    sublink: [
      {
        title: "Statistic",
        href: "/admin/statistic",
        icon: BsGraphUp,
      },
      {
        title: "Map",
        href: "/admin/map",
        icon: FaMap,
      },
    ],
  },
];
