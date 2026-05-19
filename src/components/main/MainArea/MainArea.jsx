import CardItem from '../CardItem/CardItem';
import styles from './MainArea.module.css';
import bamosList from '../../../../bamosList';

export default function MainArea() {
    return(
        <main>
            <CardItem itemData={bamosList}/>
        </main>
    );
}