// layout
import MainLayout from './../layout/main/MainLayout'

// components
import MockPage from './../components/mock'

const LoginPage = () => {
    return (
        <MainLayout title='Войти в аккаунт'>
            <MockPage title='Войти в аккаунт' />
        </MainLayout>
    )
}

export default LoginPage