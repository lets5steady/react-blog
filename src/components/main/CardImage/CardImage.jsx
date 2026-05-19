import styles from './CardImage.module.css';

export default function CardImage({src}) {
    return(
        <div className={styles.img__box}>
            <img src={src} alt="記事のサムネイル"
            className={styles.img}/>
        </div>
    );
}