// styles
import styles from './FreeCcall.module.scss'

// icons
import PhoneIcon from './../../SVG/PhoneIcon'

const FreeCcall = () => {
    return (
        <div className={styles.phone}>
            <div className={styles.phone__icon}>
                <PhoneIcon />
            </div>

            <div className={styles.phone__content}>
                <span className={styles.phone__title}>Бесплатный звонок по РФ</span>
                <a className={styles.phone__number} href="tel:+88005519202">8 800 551-92-02</a>
            </div>
        </div>

    )
}

export default FreeCcall