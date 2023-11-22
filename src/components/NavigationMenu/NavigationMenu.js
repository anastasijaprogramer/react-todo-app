import React from 'react';
import { Link } from 'react-router-dom';
import "./navigationMenu.scss"


const NavigationMenu = () =>
{
    return (
        <ul className="routes">
            <li className='routes__item'>
                <Link to="/">Home</Link>
            </li>
            <li className='routes__item'>
                <Link to="/todos">Todo List</Link>
            </li>
        </ul>

    );
}

export default NavigationMenu;
