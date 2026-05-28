import styles from './ThumbsButtons.module.css';
import ThumbsUpButton from '../ThumbsUpButton/ThumbsUpButton';
import ThumbsDownButton from "../ThumbsDownButton/ThumbsDownButton"


export default function ThumbsButtons({ thumbsUp = 0, thumbsDown = 0 }) {

    return (
        <div className={styles.actions}>
            <ThumbsUpButton initialValue={thumbsUp} />
            <ThumbsDownButton initialValue={thumbsDown} />
        </div>
    );
}