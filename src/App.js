import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BsChatLeft } from 'react-icons/bs';
//import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Sidebar, ThemeSettings, Maps } from './components';
import { Dashboard, Report, Schedule, Assets } from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css';


const App = () => {
    const { activeMenu, themeSettings, currentColor, currentMode, handleClick } = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <BrowserRouter>
            <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                    <TooltipComponent content="Chat" position="Top Left">
                        <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                            //onClick={() => setThemeSettings(true)}
                            onClick={() => handleClick('chat')}
                            style={{ background: currentColor, borderRadius: '50%' }}
                        >
                            <BsChatLeft className="h-5 w-5"/>
                        </button>    
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 dark:bg-secondary-dark-bg">
                        <Sidebar />
                    </div>
                )}
                <div className={
                    `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
                    ${activeMenu
                         ? 'md:ml-72' 
                         : 'flex-2'}`
                }>
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                        <Navbar />
                    </div>
                
                <div>
                    {themeSettings && <ThemeSettings />}
                    <Routes>
                        {/* Dashboard */}
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/maps" element={<Maps />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/schedule" element={<Schedule />} />
                        <Route path="/report" element={<Report />} />
                        <Route path="/assets" element={<Assets />} />
                    </Routes>
                </div>
                </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App