// layout
import MainLayout from './../layout/main/MainLayout'

// components
import MockPage from './../components/mock'

const ContactsPage = () => {
    return (
        <MainLayout title='Контакты'>
            <MockPage title='Контакты' />
        </MainLayout>
    )
}

export default ContactsPage