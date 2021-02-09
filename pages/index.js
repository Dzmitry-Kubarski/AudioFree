// layout
import MainLayout from '../layout/main/MainLayout'

// sections
import IntroSection from './../components/sections/IntroSection/IntroSection'
import ModelsSection from './../components/sections/ModelsSection/ModelsSection'
import VariantsSection from './../components/sections/VariantsSection/VariantsSection'
import SaleSection from './../components/sections/SaleSection/SaleSection'
import QuizSection from './../components/sections/QuizSection/QuizSection'
import DiscountSection from './../components/sections/DiscountSection/DiscountSection'
import AdvantagesSection from './../components/sections/AdvantagesSection/AdvantagesSection'
import LeadersSection from './../components/sections/LeadersSection/LeadersSection'
import QuestionsSection from './../components/sections/QuestionsSection/QuestionsSection'
import GuaranteesSection from './../components/sections/GuaranteesSection/GuaranteesSection'
import ConsultantSection from './../components/sections/ConsultantSection/ConsultantSection'

const HomePage = () => {
    return (
        <MainLayout title='Главная - Audio-shop интернет-магазин'>
            <IntroSection />
            <ModelsSection />
            <VariantsSection />
            <SaleSection />
            <QuizSection />
            <DiscountSection />
            <AdvantagesSection />
            <LeadersSection />
            <QuestionsSection />
            <GuaranteesSection />
            <ConsultantSection />
        </MainLayout>
    )
}

export default HomePage