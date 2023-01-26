import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../MenuLink/MenuLink.module.scss';

export default function MenuLinks({to, children}) {
  return (
    <NavLink
      className={({isActive}) => `
          ${styles.link}
          ${isActive ? styles.destacado : ""}
      `}
      to={to}
    >
        {children}
        
    </NavLink>
  )
}
