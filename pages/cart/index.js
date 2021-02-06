// layout
import MainLayout from '../../layout/main/MainLayout'

// components
import MockPage from '../../components/mock'

const CartPage = () => {
    return (
        <MainLayout title='Корзина'>
            <MockPage title='Корзина' />
        </MainLayout>
    )
}

export default CartPage