// layout
import MainLayout from 'layout/main/MainLayout'

// components
import MockPage from 'components/mock'

const QuizPage = () => {
    return (
        <MainLayout title='Пройти тест'>
            <MockPage title='Пройти тест' />
        </MainLayout>
    )
}

export default QuizPage