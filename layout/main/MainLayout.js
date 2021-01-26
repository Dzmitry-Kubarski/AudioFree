// core
import Head from 'next/head';

// componnets
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// styles
import styles from './MainLayout.module.scss'

export default function MainLayout({ children, title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <div className={styles.page}>
                <Header />

                <main className={styles.main}>
                    {children}
                </main>

                <Footer />
            </div>
        </>
    )
}