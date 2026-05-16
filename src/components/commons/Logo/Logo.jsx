import logoBlack from '../../../assets/bamosDesignLogo_black.svg'
import logoWhite from '../../../assets/bamosDesignLogo_white.svg'
import logoAccent from '../../../assets/bamosDesignLogo_accent.svg'
import styles from './Logo.module.css'

// src属性のみを切り替え
const logoMap = {
    black: logoBlack,
    white: logoWhite,
    accent: logoAccent,
};

// ロゴを囲むタグをdiv以外（h1など）にも変更できるようタグ名をpropsで受け取る
// 小文字だと<tag>になってしまうので大文字にして変数であることを明示
export default function Logo({ color = 'black' ,Tag = 'div' , alt = 'ロゴ' }) {
            // logoMap内に存在しないcolorが渡された場合はlogoBlackを描画
            const logoSrc = logoMap[color] ?? logoBlack;

            return <Tag className={styles.container}><img src={logoSrc} alt={alt} /></Tag>
};