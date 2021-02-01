import React from 'react'
import styles from './Intro.module.scss'

import itemImg from '../../images/intro/item-1.png'

const Intro = () => {
    return (
        <section className={styles.intro}>
            <div className='container'>
                <div className={styles.intro__slider}>

                    <div className={styles.intro__slide}>
                        <div className={styles.intro__titleBox}>
                            <h2 className={styles.intro__title}>Bestseller</h2>
                            <img className={styles.intro__titleImg} src={itemImg} alt='Фото Hoco W22' />
                        </div>

                        <div className={styles.intro__product}>
                            <span className={styles.intro__productSubtitle}>Ваш выбор</span>
                            <h1 className={styles.intro__productTitle}>Hoco W22</h1>
                            <button className={styles.intro__productBtn} type='button'>Купить</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro