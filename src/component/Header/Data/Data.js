import { FaHome } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import { MdHomeRepairService } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";

const navbarItems = [
    {
        id: 1,
        icon: <FaHome />,
        title: 'Home',
        url: '/home'
    },
    {
        id: 2,
        icon: <GoPersonFill />,
        title: 'About',
        url: '/about'
    },
    {
        id: 3,
        icon: <MdHomeRepairService />,
        title: 'Services',
        url: '/services'
    },
    {
        id: 4,
        icon: <BiSolidVideos />,
        title: 'Videos',
        url: '/videos'
    }
];

export default navbarItems;