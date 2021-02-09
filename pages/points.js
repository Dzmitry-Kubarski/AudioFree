// layout
import MainLayout from '../layout/main/MainLayout'

// components
import MockPage from '../components/mock'

const PointsPage = () => {
    return (
        <MainLayout title='Пункты самовывоза'>
            <MockPage title='Пункты самовывоза' />
        </MainLayout>
    )
}

export default PointsPage