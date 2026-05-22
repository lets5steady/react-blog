import CardItem from '../CardItem/CardItem';
import styles from './MainArea.module.css';
import bamosList from '../../../../bamosList';
import SectionHeader from '../../commons/SectionHeader/SectionHeader';
import SimpleButton from '../../commons/SimpleButton/SimpleButton';

export default function MainArea() {
    return(
        <main>
            <SectionHeader title='Latest Blog Posts'/>
            <div className={styles.list}>
                <CardItem itemData={bamosList}/>
            </div>
            <SectionHeader title='We Value Your Feedback'/>
            <div className={styles.text}>
                <p>We’re gathering feedback from our customers at BAMOS DESIGN.</p>
                <p> Please take a moment to share your thoughts — your input helps us make BAMOS DESIGN even better.</p>
            </div>
            <div className={styles.btn_container}>
                <SimpleButton text='送信'/>
            </div>
        </main>
    );
}