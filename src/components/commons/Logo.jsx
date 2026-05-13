import logoBlack from '../../assets/bamosDesignLogo_black.svg'
import logoWhite from '../../assets/bamosDesignLogo_white.svg'
import logoAccent from '../../assets/bamosDesignLogo_accent.svg'

export default function Logo({ color = 'black' }) {
            if (color === 'black') {
                return <div><img src={logoBlack} alt="黒のロゴ" /> </div>
            }
            if (color === 'white') {
                return <div><img src={logoWhite} alt="白のロゴ" /> </div>
            }
            if (color === 'accent') {
                return <div><img src={logoAccent} alt="ピンクのロゴ" /> </div>
            }
};