// core
import Link from 'next/link'

// components
import Logo from '../../UI/Logo/Logo'

// styles
import styles from './HeaderTop.module.scss'

const HeaderTop = () => {
    return (
        <div className={styles.header__topWrap}>
            <div className="container">
                <div className={styles.header__top}>
                    <Logo />

                    <ul className={styles.menuInfo}>
                        <li className={styles.menuInfo__item}>
                            <Link href="/delivery">
                                <a className={styles.menuInfo__link}>Доставка и оплата</a>
                            </Link>
                        </li>

                        <li className={styles.menuInfo__item}>
                            <Link href="/guarantee">
                                <a className={styles.menuInfo__link} >Гарантия и возврат</a>
                            </Link>
                        </li>

                        <li className={styles.menuInfo__item}>
                            <Link href="/points">
                                <a className={styles.menuInfo__link}>Пункты самовывоза</a>
                            </Link>
                        </li>

                        <li className={styles.menuInfo__item}>
                            <Link href="/contacts">
                                <a className={styles.menuInfo__link}>Контакты</a>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>

    )
}

export default HeaderTop