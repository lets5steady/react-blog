import styles from './MenuItem.module.css';

export default function MenuItem({items = []}) {
    return(
            <ul className={styles.container}>
                {items.map(item => 
                    <li key={item.id}><a href="#">{item.text}</a></li>
                )}
            </ul>
    );
}