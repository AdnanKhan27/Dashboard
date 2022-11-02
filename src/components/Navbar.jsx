import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { MdOutlineHelpOutline } from 'react-icons/md';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Help, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" onClick={customFunc}
    style={{ color }}
    className="relative text-xl rounded-full p-3 hover:bg-gray-200"
    >
      <span style={{ background: dotColor }}
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const { setActiveMenu, isClicked, handleClick, screenSize, setScreenSize, setThemeSettings, currentColor } = useStateContext();

  useEffect(() => {
    // setting the screenSize to the innerWidth of the screen in px
    const handleResize = () => setScreenSize(window.innerWidth);
    // adding an event listner
    window.addEventListener('resize', handleResize);

    handleResize();
    // removes the event listner
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  },[screenSize]);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color={currentColor} icon={<AiOutlineMenu />} />

      <div className="flex">
        <NavButton 
        title="Settings" 
        customFunc={() => setThemeSettings(true)}
        /* onClick={() => setThemeSettings(true)} */
        color={currentColor}
        icon={<FiSettings />} />
        <NavButton 
        title="Help"
        dotColor={ currentColor }
        customFunc={() => handleClick('help')} 
        color={currentColor} 
        icon={<MdOutlineHelpOutline />} />
        <NavButton 
        title="Notifications"
        dotColor={ currentColor }
        customFunc={() => handleClick('notification')} 
        color={currentColor} 
        icon={<RiNotification3Line />} />
        <TooltipComponent
        content="Profile"
        position="BottomCenter"
        >
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-gray-200 rounded-lg"
          onClick={() => handleClick('userProfile')}>
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
            />
            <p>
              <span className=" text-gray-400 text-14">Hi, </span> {' '}
              <span className="text-gray-400 text-14 font-bold ml-1">Michael</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {/* {isClicked.settings && <Settings />} */}
        {/* {themeSettings && <themeSettings />} */}
        {isClicked.help && <Help />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar;