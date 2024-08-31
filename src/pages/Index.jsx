import React, { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';

const Index = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="relative min-h-screen flex text-white">
            {/* Background with radial gradient */}
            <div className="absolute top-0 left-0 z-[-2] h-screen w-screen bg-neutral-950">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>

            {/* Sidebar */}
            <nav
                className={`fixed top-0 right-0 h-full bg-gray-800 shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out w-64 z-40`}
            >
                <div className="flex justify-between items-center px-4 py-6 border-b border-gray-700">
                    <div className="text-xl font-bold text-white">Logo</div>
                    <button className="text-2xl text-white" onClick={toggleSidebar}>
                        <IoClose />
                    </button>
                </div>
                <ul className="mt-6 space-y-2">
                    <li>
                        <a href="#" className="block px-4 py-3 text-lg text-white hover:bg-gray-700 rounded">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-3 text-lg text-white hover:bg-gray-700 rounded">About</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-3 text-lg text-white hover:bg-gray-700 rounded">Services</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-3 text-lg text-white hover:bg-gray-700 rounded">Contact</a>
                    </li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="flex-1 flex flex-col relative z-10">
                <header className="flex justify-between items-center px-6 py-4 text-white border-b border-gray-700">
                    <div className="text-2xl font-bold">Logo</div>
                    <div className="text-2xl cursor-pointer" onClick={toggleSidebar}>
                        <CiMenuBurger />
                    </div>
                </header>
                <main className="flex-1 p-6">
                    <h1 className="text-5xl font-extrabold mb-4 ">DETECT <br /> <span className='text-blue-500'>DEEPFAKES</span></h1>
                    <p className="text-lg mb-4">Our team is tackling one of the most serious problems on the internet: <span className='text-sm font-bold text-blue-500' >DEEPFAKES</span>.</p>
                    {/* <p className='text-sm mb-6 '>Upload a file to start analyzing:</p> */}
                    <div className='flex gap-4'>
                        <button className='  mt-4 bg-blue-600 text-xl py-2 px-6 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-colors text-white'>
                            Get Started
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
};
//initial ui
export default Index;
