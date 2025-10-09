import React, { useEffect } from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { Bounce, ToastContainer } from 'react-toastify';
import ScrollToTop from '../utilities/ScrollToTop';

const Root = () => {

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual"
        }

        window.scrollTo(0, 0);
    },[])

    return (
        <div>
            <ScrollToTop />
            <Navbar />
            <div className=' my-20 '>
                <Outlet />
            </div>
            <Footer />
            {/* Toast */}
            <ToastContainer
                position="top-center"
                autoClose={3000}
                limit={1}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
};

export default Root;