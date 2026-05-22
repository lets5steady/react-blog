import { useState } from 'react';
import styles from './HeaderNav.module.css';
import Logo from '../../commons/Logo/Logo';
import PlusButton from '../PlusButton/PlusButton';
import MenuItem from '../MenuItem/MenuItem';

const drawerBtnText = {
    nomal: 'MENU',
    active: 'CLOSE'
};

const menuItems = [
    { text: 'MENU-01', id: 1 },
    { text: 'MENU-02', id: 2 },
    { text: 'MENU-03', id: 3 },
    { text: 'MENU-04', id: 4 },
];


export default function HeaderNav() {
    const [isOpen,setIsOpen] = useState(false);

    const handleClick = (e => {
        const clicked = !isOpen;
        setIsOpen(clicked);
    });

    return(
        <>
        <div className={isOpen ? styles.active : styles.header__nav}>
            <div className={styles.header__logo}>
                <h1><Logo color={isOpen ? 'white' : 'black'}  alt = 'BAMOS DESIGN'/></h1>
                <PlusButton text={drawerBtnText} isOpen={isOpen} onToggle={handleClick}/>
            </div>
        </div>
        <nav className={isOpen ? styles.open : styles.modal}>
            <MenuItem items={menuItems}/>
        </nav>
        </>
    );
}