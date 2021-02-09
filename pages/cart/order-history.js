// layout
import MainLayout from '../../layout/main/MainLayout'

// components
import MockPage from '../../components/mock'

const OrderHistoryPage = () => {
    return (
        <MainLayout title='Ваши заказы'>
            <MockPage title='Ваши заказы' />
        </MainLayout>
    )
}

export default OrderHistoryPage