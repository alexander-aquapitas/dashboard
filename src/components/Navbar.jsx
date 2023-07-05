import React, { useEffect, useRef } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar5 from '../data/avatar5.JPG';
import { Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" onClick={() => customFunc()} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
        <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>
            {icon}
    </button>
  </TooltipComponent>
);

const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref]);

  return ref;
};

const Navbar = () => {
  const { initialState, setActiveMenu, setIsClicked, isClicked, handleClick, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false);
    } else{
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleClickOutside = () => {
    setIsClicked({ ...initialState});
  };
  
  const ref = useOutsideClick(handleClickOutside);

  return (
    <div className="flex justify-between p-2 md:mx-0 relative hover:bg-white dark:hover:bg-light-gray">
      <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} icon={<AiOutlineMenu/>} />
      <div className="flex" ref={ref}>
        <NavButton title="Notifications" dotColor="#1d7874" customFunc={() => handleClick('notification')} icon={<RiNotification3Line />} />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClick('userProfile')}>
            <img className="rounded-full w-8 h-8" src={avatar5} alt='profile'/>
          </div>
        </TooltipComponent>

        {isClicked.chat && (<Chat />)}  
        {isClicked.notification && (<Notification />)}  
        {isClicked.userProfile && (<UserProfile />)}    
      </div>
    </div>
  );
};

export default Navbar;