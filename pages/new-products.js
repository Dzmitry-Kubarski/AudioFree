import MainLayout from 'layout/main/MainLayout'

import MockPage from 'components/mock'

const NewProductsPage = () => {
    return (
        <MainLayout title='Новинки'>
            <MockPage title='Новинки' />
        </MainLayout>
    )
}

export default NewProductsPage