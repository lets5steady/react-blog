import logoBlack from '../../../assets/bamosDesignLogo_black.svg'
import logoWhite from '../../../assets/bamosDesignLogo_white.svg'
import logoAccent from '../../../assets/bamosDesignLogo_accent.svg'

// src属性のみを切り替え
const logoMap = {
    black: logoBlack,
    white: logoWhite,
    accent: logoAccent,
};

export default function Logo({ color = 'black' , alt = 'ロゴ' }) {
            // logoMap内に存在しないcolorが渡された場合はlogoBlackを描画
            const logoSrc = logoMap[color] ?? logoBlack;

            return <img src={logoSrc} alt={alt} />
};