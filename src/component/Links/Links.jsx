import React from 'react';
import { Link } from 'react-router-dom';

const Links = ({ route, onClick }) => {
    const handleClick = () => {
        onClick();
    };
    return (
        <li className='pt-1 pb-3 font-semibold hover:text-[#7E90FE] duration-150'>
            <Link to={route.path} onClick={handleClick}>
                {route.name}
            </Link>
        </li>
    );
};

export default Links;
