import MainLayout from 'layout/main/MainLayout'

import MockPage from 'components/mock'

const AboutPage = () => {
    return (
        <MainLayout title='О компании'>
            <MockPage title='О компании' />
        </MainLayout>
    )
}

export default AboutPage