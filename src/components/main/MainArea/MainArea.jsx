import CardItem from '../CardItem/CardItem';
import styles from './MainArea.module.css';
import bamosList from '../../../../bamosList';
import SectionHeader from '../../commons/SectionHeader/SectionHeader';
import SimpleButton from '../../commons/SimpleButton/SimpleButton';
import FormModal from '../FormModal/FormModal';
import { useState } from 'react';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

export default function MainArea() {
    const [isOpen,setIsOpen] = useState(false);
    const modalBtn = (e) => {
        setIsOpen(prev => !prev);
    };

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
                <SimpleButton text='Feedback' onClick={modalBtn}/>
            </div>
            <ModalOverlay state={isOpen}
            onClick={modalBtn}>
                <FormModal title='FEEDBACK'
                desc='Thank you for visiting BAMOS DESIGN.Please take a moment to complete our survey to help us improve our services.'
                onClick={modalBtn}/>
            </ModalOverlay>
        </main>
    );
}