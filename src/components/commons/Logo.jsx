import logoBlack from '../../assets/bamosDesignLogo_black.svg'
import logoWhite from '../../assets/bamosDesignLogo_white.svg'
import logoAccent from '../../assets/bamosDesignLogo_accent.svg'

// ロゴを囲むタグをdiv以外（h1など）にも変更できるようタグ名をpropsで受け取る
// 小文字だと<tag>になってしまうので大文字にして変数であることを明示
export default function Logo({ color = 'black' ,Tag = 'div' }) {
            if (color === 'black') {
                return <Tag><img src={logoBlack} alt="黒のロゴ" /></Tag>
            }
            if (color === 'white') {
                return <Tag><img src={logoWhite} alt="白のロゴ" /></Tag>
            }
            if (color === 'accent') {
                return <Tag><img src={logoAccent} alt="ピンクのロゴ" /></Tag>
            }
};