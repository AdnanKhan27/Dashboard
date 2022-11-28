import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdSpaceDashboard, MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 /* hover:text-${currentColor} */ hover:bg-gray-200 m-2 dark:hover:bg-opacity-10`;

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <MdSpaceDashboard /> <span>Dashboard</span>
            </Link>
            <TooltipComponent content="Close" position="BottomCenter">
              <button
                type="button"
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray dark:hover:bg-opacity-10 mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <div key={link.name}>
                    <NavLink
                      to={`/${link.name}`}
                      key={link.name}
                      onClick={handleCloseSideBar}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? currentColor : "",
                      })}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      {link.icon}
                      <span className="capitalize">{link.name}</span>
                    </NavLink>

                    {/* Displaying sublinks if present  */}
                    {/* {console.log(link.hasOwnProperty("subs"))} */}
                  </div>
                    // {link.hasOwnProperty("subs")
                    //   ? lin.subs.map((subLink) => (

                    //       <NavLink
                    //         to={`/${subLink.name}`}
                    //         key={subLink.name}
                    //         onClick={handleCloseSideBar}
                    //         style={({ isActive }) => ({
                    //           backgroundColor: isActive ? currentColor : "",
                    //         })}
                    //         className={({ isActive }) =>
                    //           isActive ? activeLink : normalLink
                    //         }
                    //       >
                    //         {/* {link.icon} */}
                    //         <span className="capitalize">{sublink.name}</span>
                    //       </NavLink>
                    //     ))
                    //   : ""}
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
