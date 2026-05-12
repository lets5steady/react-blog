import SectionHeader from '../../commons/SectionHeader/SectionHeader';
import SimpleButton from '../../commons/SimpleButton/SimpleButton';
import styles from './FooterArea.module.css'

export default function FooterArea() {
    return(
        <footer>
            <h1>フッター</h1>
            <SectionHeader title='We Value Your Feedback' />
            <SimpleButton text='送信'/>
        </footer>
    );
}