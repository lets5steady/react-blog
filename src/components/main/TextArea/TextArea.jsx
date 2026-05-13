import styles from './TextArea.module.css'

export default function TextArea({placeholder = 'ここに記入してください。'}) {
    return(
            <textarea name="message" id="message" 
            rows="6" cols="22"
            placeholder={placeholder}
            className={styles.textArea}></textarea>
    );
}