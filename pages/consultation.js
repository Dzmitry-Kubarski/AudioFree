// layout
import MainLayout from './../layout/main/MainLayout'

// components
import MockPage from './../components/mock'

const ConsultationPage = () => {
    return (
        <MainLayout title='Получить консультацию'>
            <MockPage title='Получить консультацию' />
        </MainLayout>
    )
}

export default ConsultationPage