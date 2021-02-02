// layout
import MainLayout from '../layout/main/MainLayout'

// components
import Intro from './../components/Intro/Intro'
import Button from './../components/UI/Button/Button'
import Card from './../components/UI/Card/Card';

const HomePage = () => {
    return (
        <MainLayout title='Главная - Audio-shop интернет-магазин'>
            <Intro />

            <div style={{ padding: '100px' }}>

                <Card />

                <Card variant='sale' />

                <Card variant='limited' />

            </div>
        </MainLayout>
    )
}

export default HomePage