import CardItem from '../CardItem/CardItem';
import styles from './MainArea.module.css';
import bamosList from '../../../../bamosList';
import SectionHeader from '../../commons/SectionHeader/SectionHeader';

export default function MainArea() {
    return(
        <main>
            <SectionHeader title='Latest Blog Posts'/>
            <div className={styles.list}>
                <CardItem itemData={bamosList}/>
            </div>
        </main>
    );
}