import MainLayout from 'layout/main/MainLayout'

import IntroSection from '@/sections/IntroSection/IntroSection'
import ModelsSection from '@/sections/ModelsSection/ModelsSection'
import VariantsSection from '@/sections/VariantsSection/VariantsSection'
import SaleSection from '@/sections/SaleSection/SaleSection'
import QuizSection from '@/sections/QuizSection/QuizSection'
import DiscountSection from '@/sections/DiscountSection/DiscountSection'
import AdvantagesSection from '@/components/sections/AdvantagesSection/AdvantagesSection'
import LeadersSection from '@/sections/LeadersSection/LeadersSection'
import QuestionsSection from '@/sections/QuestionsSection/QuestionsSection'
import GuaranteesSection from '@/sections/GuaranteesSection/GuaranteesSection'
import ConsultantSection from '@/sections/ConsultantSection/ConsultantSection'

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