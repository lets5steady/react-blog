import SectionHeader from '../../commons/SectionHeader/SectionHeader';
import styles from './MainArea.module.css'

export default function MainArea() {
    return(
        <main>
            <h1>メイン</h1>
            <SectionHeader title='Latest Blog Posts'/>
        </main>
    );
}