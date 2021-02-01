// layout
import MainLayout from '../layout/main/MainLayout'

// components
import Intro from './../components/Intro/Intro'
import Button from './../components/UI/Button/Button'

const HomePage = () => {
    return (
        <MainLayout title='Главная - Audio-shop интернет-магазин'>
            <Intro />

            <div style={{ padding: '100px' }}>

                <Button >primary</Button>

                <Button variant='green'>green button</Button>

                <Button variant='outline'>outline button</Button>
            </div>
        </MainLayout>
    )
}

export default HomePage