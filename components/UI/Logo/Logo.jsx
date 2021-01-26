// core
import Link from 'next/link'

// images
import logoSvg from '../../../images/logo.svg'

// styles
import styles from './Logo.module.scss'

const Logo = () => {
    return (
        <Link href='/'>
            <a className={styles.logo}>
                <img src={logoSvg} alt="Логотип Audio-shop" />

                <div className={styles.logo__text}>
                    AudioFree
                    <span> | Интернет магазин беспроводных наушников по РФ</span>
                </div>
            </a>
        </Link>
    )
}

export default Logo