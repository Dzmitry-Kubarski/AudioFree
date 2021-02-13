import MainLayout from 'layout/main/MainLayout'

import MockPage from 'components/mock'

const CartPage = () => {
    return (
        <MainLayout title='Корзина'>
            <MockPage title='Корзина' />
        </MainLayout>
    )
}

export default CartPage