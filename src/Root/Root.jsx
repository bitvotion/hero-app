import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { Bounce, ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
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