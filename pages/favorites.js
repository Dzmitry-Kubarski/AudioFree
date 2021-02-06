// layout
import MainLayout from './../layout/main/MainLayout'

// components
import MockPage from './../components/mock'

const FavoritesPage = () => {
    return (
        <MainLayout title='Избранное'>
            <MockPage title='Избранное' />
        </MainLayout>
    )
}

export default FavoritesPage