import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Links from '../Links/Links';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <span className="md:text-2xl hidden md:block"><span className='font-bold'>Job</span>Resources</span>
    );
};

const Header = () => {
    const routes = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "Statistics",
            path: "/statistics"
        },
        {
            id: 3,
            name: "Applied Jobs",
            path: "/appliedJobs"
        },
        {
            id: 4,
            name: "Blog",
            path: "/blog"
        },
    ];
    const [open, setOpen] = useState(false);

    const handleLinkClick = () => {
        setOpen(false);
    };

    return (
        <nav className=''>
            <div className='md:hidden flex justify-between m-4'>
                <div>
                    <h1><span className='font-bold'>Job</span>Resources</h1>
                </div>
                <span onClick={() => setOpen(!open)} >{open === true
                    ? <XMarkIcon className="h-6 w-6 text-[#7E90FE]" />
                    : <Bars3Icon className="h-6 w-6 text-[#7E90FE]" />
                }</span>
            </div>
            <ul className={`duration-500 absolute md:static bg-[#F4F4F4] px-5 md:px-28 py-3 w-full h-full ${open ? 'left-0' : '-left-full'}`}>

                <div className="md:flex md:items-center md:justify-between">
                    <span><Logo /></span>
                    <div className='md:flex md:justify-end md:items-center gap-10'>
                        {
                            routes.map(route =>
                                <Links
                                    key={route.id}
                                    route={route}
                                    onClick={handleLinkClick}
                                />
                            )
                        }
                    </div>
                    <span>
                        <button onClick={() => handleLinkClick()} className="bg-[#7E90FE]  text-white font-bold py-2 px-5 rounded ">
                            <Link to='/'>Star Applying</Link>
                        </button>
                    </span>
                </div>
            </ul>
        </nav>
    );
};

export default Header;
