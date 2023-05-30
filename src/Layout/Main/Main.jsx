import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

const Main = () => {
    const location = useLocation();
    // console.log(location);
    const headerAndFooterDisable = location.pathname.includes('login');
    return (
        <div>
            {headerAndFooterDisable || <Navbar></Navbar>}
            <Outlet></Outlet>
            {headerAndFooterDisable || <Footer></Footer>}
        </div>
    );
};

export default Main;