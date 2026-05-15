import styles from './CardImage.module.css';

export default function CardLayout({children}) {
    return(
        <div className={styles.container}>
            {children.map(item => 
                <div key={crypto.randomUUID()}>
                    <img src={item.image} alt="記事のサムネイル" />
                </div>
            )}
        </div>
    );
}