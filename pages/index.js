// layout
import MainLayout from '../layout/main/MainLayout'

// components
import Intro from './../components/Intro/Intro'
import Variants from './../components/Variants/Variants';
import Tabs from './../components/UI/Tabs/Tabs';
import BannerSale from './../components/UI/BannerSale/BannerSale';
import TextField from './../components/UI/TextField/TextField';

const HomePage = () => {
    return (
        <MainLayout title='Главная - Audio-shop интернет-магазин'>
            <Intro />
        </MainLayout>
    )
}

export default HomePage