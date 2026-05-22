import ThumbsButtons from '../ThumbsButtons/ThumbsButtons';
import CardImage from '../CardImage/CardImage';
import CardHeader from "../CardHeader/CardHeader";
import styles from './CardItem.module.css';
import CardLayout from '../CardLayout/CardLayout';

export default function CardItem({itemData}) {
    return(
        <CardLayout>
            {itemData.map(item => (
                <div key={crypto.randomUUID()} className={styles.card__item}>
                    <CardImage src={item.image}/>
                    <div className={styles.desc}>
                        <CardHeader category={item.category} title={item.title} name={item.author}/>
                        <span className={styles.adjust}><ThumbsButtons thumbsUp={item.thumbsUp} thumbsDown={item.thumbsDown}/></span>
                    </div>
                </div>
            ))}
        </CardLayout>
    );
}
