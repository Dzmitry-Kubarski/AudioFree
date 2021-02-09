// libs
import styled from 'styled-components'

// utils
import { vars } from '../../../styles/vars'
import { variantsData } from './variantsData'

// images
import bgImg from '../../../images/intro/bg.png'

// components
import { Container } from '../../UI/Container/Container'
import VariantsSlider from '../../UI/VariantsSlider/VariantsSlider'
import TitleSection from './../../UI/TitleSection/TitleSection'

const VariantsSection = () => {
    return (
        <Wrapper>
            <Container>
                <TitleSection subTitle='Выберите свои наушники' title='Функциональные, комфортные, стильные' dark />
            </Container>

            <div className='swiper-container'>
                <VariantsSlider data={variantsData} />
            </div>
        </Wrapper>
    )
}

export default VariantsSection

// styles
const Wrapper = styled.section`
    padding: 100px 0px;
    background: url(${bgImg});
    background-color: ${vars.colorPurple};

    @media (max-width: 540px) {
        padding: 50px 0;   
    }
`