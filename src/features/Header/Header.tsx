import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from '../Pages/Pages';
import styles from './Header.module.scss'

export const Header = () => {
    return (
        <div className={styles.navList}>
            <h2>Navigation</h2>
            <NavLink className={styles.navLink} to={PATH.ChangePass}>Change your password</NavLink>
            <NavLink className={styles.navLink} to={PATH.Login}>Login</NavLink>
            <NavLink className={styles.navLink} to={PATH.RecoveryPass}>Recovery password</NavLink>
            <NavLink className={styles.navLink} to={PATH.Profile}>Profile</NavLink>
            <NavLink className={styles.navLink} to={PATH.Registration}>Registration</NavLink>
            <NavLink className={styles.navLink} to={PATH.Test}>Test</NavLink>
        </div>
    )
}
