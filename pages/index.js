// layout
import MainLayout from '../layout/main/MainLayout'

// components
import Intro from './../components/Intro/Intro'
import Variants from './../components/Variants/Variants';
import Tabs from './../components/UI/Tabs/Tabs';

const HomePage = () => {
    return (
        <MainLayout title='Главная - Audio-shop интернет-магазин'>
            <Intro />

            <div style={{ padding: '100px' }}>
                <Tabs />
            </div>

        </MainLayout>
    )
}

export default HomePage