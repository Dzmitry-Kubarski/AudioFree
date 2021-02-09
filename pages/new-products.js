// layout
import MainLayout from './../layout/main/MainLayout'

// components
import MockPage from './../components/mock'

const NewProductsPage = () => {
    return (
        <MainLayout title='Новинки'>
            <MockPage title='Новинки' />
        </MainLayout>
    )
}

export default NewProductsPage