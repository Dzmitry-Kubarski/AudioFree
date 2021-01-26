// core
import Link from 'next/link'

// components
import HeaderTop from '../Header/HeaderTop/HeaderTop'
import HeaderBottom from '../Header/HeaderBottom/HeaderBottom'
import FreeCcall from './../UI/FreeCcall/FreeCcall'
import Search from './../UI/Search/Search'

// icons
import ComparisonIcon from './../SVG/ComparisonIcon'
import FavouritesIcon from './../SVG/FavouritesIcon'
import CartIcon from './../SVG/CartIcon'

// styles
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <HeaderTop />

            <div className={styles.headerBody}>
                <div className="container">
                    <div className={styles.headerBody__inner}>
                        <FreeCcall />
                        <Search />

                        <div className={styles.control}>
                            <div className={styles.control__item}>
                                <Link href='/comparison'>
                                    <a className={styles.control__link}>
                                        <ComparisonIcon />
                                        <span className={styles.control__counter}>1</span>
                                    </a>
                                </Link>
                            </div>

                            <div className={styles.control__item}>
                                <Link href='/favourites'>
                                    <a className={styles.control__link}>
                                        <FavouritesIcon />
                                        <span className={styles.control__counter}>23</span>
                                    </a>
                                </Link>
                            </div>

                            <div className={styles.control__item}>
                                <Link href='/cart'>
                                    <a className={styles.control__link}>
                                        <CartIcon />
                                        <span className={styles.control__counter}>55</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <HeaderBottom />
        </header >
    )
}

export default Header