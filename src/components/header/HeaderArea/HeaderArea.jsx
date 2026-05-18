import FirstView from '../FirstView/FirstView';
import HeaderNav from '../HeaderNav/HeaderNav';
import styles from './HeaderArea.module.css'

export default function HeaderArea() {
    return(
        <header>
            <HeaderNav />
            <FirstView />
        </header>
    );
}