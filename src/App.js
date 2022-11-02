import React /* { useState } */ from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, Settings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Line, Bar, Area, Customers, Financial, ColorMapping, Pie} from './pages';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { activeMenu, themeSettings, currentMode } = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark': ''}>
      <Router>
        <div className="flex relative dark:bg-main-dark-bg">
          {/* <div className="fixed right-4 bottom-4" style={{ zIndex: '1000'}}>
            <TooltipComponent content="Settings" position="Top">
              <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              style={{background: 'cyan', borderRadius: '50%'}}>
              <FiSettings />
              </button>
            </TooltipComponent>
          </div> */}
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
            `dark:bg-main-dark-bg bg-main-bg min-h-screen  w-full ${activeMenu 
              ? 'md:ml-72'
              : 'flex-2'}`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          

            <div>
              {themeSettings && <Settings />}

              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/calendar" element={<Calendar />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/stacked" element={<Stacked />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App