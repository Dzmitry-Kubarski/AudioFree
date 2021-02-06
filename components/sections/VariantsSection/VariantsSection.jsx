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

const VariantsSection = () => {
    return (
        <StyledWrapper>
            <Container>
                <StyledTitle>
                    Выберите свои наушники
                    <span>Функциональные, комфортные, стильные</span>
                </StyledTitle>
            </Container>

            <div className="swiper-container">
                <VariantsSlider data={variantsData} />
            </div>
        </StyledWrapper>
    )
}

export default VariantsSection

// styles
const StyledWrapper = styled.section`
    padding: 100px 0px;
    background: url(${bgImg});
    background-color: ${vars.colorPurple};
`

const StyledTitle = styled.h2`
    font-weight: 300;
    font-size: 44px;
    color: white;
    text-align: center;
    margin-bottom: 60px;

    span {
        display: block;
        font-weight: 700;
        font-size: 44px;
        color: white;        
    }
`