// layout
import MainLayout from '../layout/main/MainLayout'

// styles
import styles from '../styles/pages/home.module.scss'
import Intro from './../components/Intro/Intro';

const HomePage = () => {
    return (
        <MainLayout title='Главная - Audio-shop интернет-магазин'>
            <Intro />
        </MainLayout>
    )
}

export default HomePage