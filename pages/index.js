// layout
import MainLayout from '../layout/main/MainLayout'

// components
import Intro from './../components/Intro/Intro'
import Variants from './../components/Variants/Variants';

const HomePage = () => {
    return (
        <MainLayout title='Главная - Audio-shop интернет-магазин'>
            <Intro />

            <Variants />

        </MainLayout>
    )
}

export default HomePage