// styles
import styles from './Search.module.scss'

// icons
import SearchIcon from './../../SVG/SearchIcon'

const Search = () => {
    return (
        <div className={styles.search}>
            <input className={styles.search__input} type="text" placeholder="Поиск товара" />

            <button className={styles.search__btn} type="button">
                <SearchIcon />
            </button>
        </div>

    )
}

export default Search