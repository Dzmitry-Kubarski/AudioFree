import MainLayout from 'layout/main/MainLayout'

import MockPage from 'components/mock'

const BlogPage = () => {
    return (
        <MainLayout title='Блог'>
            <MockPage title='Блог' />
        </MainLayout>
    )
}

export default BlogPage