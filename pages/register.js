// layout
import MainLayout from './../layout/main/MainLayout'

// components
import MockPage from './../components/mock'

const RegisterPage = () => {
    return (
        <MainLayout title='Зарегистрироваться'>
            <MockPage title='Зарегистрироваться' />
        </MainLayout>
    )
}

export default RegisterPage