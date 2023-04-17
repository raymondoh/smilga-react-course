import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms, FaHome } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const links = [
  {
    id: 1,
    text: "stats",
    path: "/dashboard",
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: "all jobs",
    path: "/dashboard/alljobs",
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: "add job",
    path: "/dashboard/addjob",
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: "profile",
    path: "/dashboard/profile",
    icon: <ImProfile />,
  },
];

export default links;
