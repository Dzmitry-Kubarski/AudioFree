// layout
import MainLayout from '../../layout/main/MainLayout'

// components
import MockPage from '../../components/mock'

const CatalogPage = () => {
    return (
        <MainLayout title='Каталог товаров'>
            <MockPage title='Каталог товаров' />
        </MainLayout>
    )
}

export default CatalogPage