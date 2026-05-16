import { useState } from 'react';
import styles from './HeaderNav.module.css';
import Logo from '../../commons/Logo';
import PlusButton from '../PlusButton/PlusButton';

const drawerBtnText = {
    nomal: 'MENU',
    active: 'CLOSE'
};

export default function HeaderNav() {
    const [isOpen,setIsOpen] = useState(false);

    const handleClick = (e => {
        const clicked = !isOpen;
        setIsOpen(clicked);
    });

    return(
        <div className={styles.header__nav}>
            <Logo color='black' Tag="h1" alt = 'BAMOS DESIGN'/>
            <PlusButton text={drawerBtnText} isOpen={isOpen} onToggle={handleClick}/>
        </div>
    );
    
}