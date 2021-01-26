// core
import Link from 'next/link'

// styles
import styles from './HeaderBottom.module.scss'

// icons
import BurgerIcon from '../../SVG/BurgerIcon'
import AccountIcon from '../../SVG/AccountIcon'

const HeaderBottom = () => {
    return (
        <div className={styles.header__bottomWrap}>
            <div className='container'>
                <div className={styles.headder__bottomInner}>

                    <div className={styles.header__menuBtnWrapp}>
                        <button className={styles.header__menuBtn} type='button'>
                            <BurgerIcon />
                            <span>Каталог товаров</span>
                        </button>
                    </div>

                    <nav className={styles.menu}>
                        <ul className={styles.menu__list}>
                            <li className={styles.menu__item}>
                                <Link href='/'>
                                    <a className={styles.menu__link}>Главная</a>
                                </Link>
                            </li>

                            <li className={styles.menu__item}>
                                <Link href='/discounts'>
                                    <a className={styles.menu__link}>Скидки</a>
                                </Link>
                            </li>

                            <li className={styles.menu__item}>
                                <Link href='/new-products'>
                                    <a className={styles.menu__link}>Новинки</a>
                                </Link>
                            </li>

                            <li className={styles.menu__item}>
                                <Link href='/brands'>
                                    <a className={styles.menu__link}>Бренды</a>
                                </Link>
                            </li>

                            <li className={styles.menu__item}>
                                <Link href='/blog'>
                                    <a className={styles.menu__link}>Блог</a>
                                </Link>
                            </li>

                            <li className={styles.menu__item}>
                                <Link href='/promotions'>
                                    <a className={styles.menu__link}>Акции</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className={styles.header__loginWrap}>
                        <Link href='/auth'>
                            <a className={styles.header__login}>
                                <AccountIcon />
                                <span>Вход/Регистрация</span>
                            </a>
                        </Link>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default HeaderBottom