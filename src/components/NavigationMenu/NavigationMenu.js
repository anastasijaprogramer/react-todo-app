import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./navigationMenu.module.scss"


const NavigationMenu = () =>
{
    return (
        <ul className={styles.routes}>
            <li className={styles.routesItem}>
                <Link to="/">Home</Link>
            </li>
            <li className={styles.routesItem}>
                <Link to="/todos">Todo List</Link>
            </li>
        </ul>

    );
}

export default NavigationMenu;
