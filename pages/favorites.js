import MainLayout from 'layout/main/MainLayout'

import MockPage from 'components/mock'

const FavoritesPage = () => {
    return (
        <MainLayout title='Избранное'>
            <MockPage title='Избранное' />
        </MainLayout>
    )
}

export default FavoritesPage