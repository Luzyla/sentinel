import Link from "next/link";
import { FaHome, FaUser, FaUsers, FaCalendarAlt, FaComment, FaCog, FaSignOutAlt } from "react-icons/fa";
import { FaClipboardCheck, FaCircleInfo, FaCircleUser } from "react-icons/fa6";

const menuItems = [
    {
      title: "MENU",
      items: [
        {
          icon: <FaHome />,
          label: "Home",
          href: "/",
          visible: ["admin", "supervisor", "user"],
        },
        {
          icon: <FaClipboardCheck />,
          label: "Supervisor",
          href: "/list/supervisor",
          visible: ["admin"],
        },
        {
          icon: <FaUser />,
          label: "User",
          href: "/list/user",
          visible: ["admin", "supervisor"],
        },
        {
          icon: <FaCalendarAlt />,
          label: "Events",
          href: "/list/events",
          visible: ["admin", "supervisor"],
        },
        {
          icon: <FaComment />,
          label: "Messages",
          href: "/list/messages",
          visible: ["admin", "supervisor", "user"],
        },
        {
          icon: <FaCircleInfo />,
          label: "Info",
          href: "/list/info",
          visible: ["admin", "supervisor", "user"],
        },
      ],
    },
    {
      title: "OTHER",
      items: [
        {
          icon: <FaCircleUser />,
          label: "Profile",
          href: "/profile",
          visible: ["admin", "supervisor", "user"],
        },
        {
          icon: <FaCog />,
          label: "Settings",
          href: "/settings",
          visible: ["admin", "supervisor", "user"],
        },
        {
          icon: <FaSignOutAlt />,
          label: "Logout",
          href: "/logout",
          visible: ["admin", "supervisor", "user"],
        },
      ],
    },
  ];

const Menu = () => {
    return (
        <div className="h-full w-full">
            {menuItems.map(i => (
                <div className="m-1 flex flex-col gap-4 justify-center xl:items-start lg:items-start md:items-center sm:items-center" key={i.title}>
                    <span className="mt-4 font-bold justify-start">{i.title}</span>
                    {i.items.map(item => (
                        <Link href={item.href} key={item.label} className="flex items-center gap-2 md:text-xl">
                            {item.icon}
                            <span className="hidden lg:inline-flex">{item.label}</span>
                        </Link>
                        
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Menu