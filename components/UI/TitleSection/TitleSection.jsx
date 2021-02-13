import styled, { css } from 'styled-components'

const TitleSection = ({ subTitle, title, dark }) => {
    return (
        <SubTitle dark={dark}>
            {subTitle}
            <Title>{title}</Title>
        </SubTitle>
    )
}

export default TitleSection

export const SubTitle = styled.h2`
    font-weight: 300;
    font-size: 44px;
    color: #535353;
    text-align: center;
    margin-bottom: 50px;

    ${props => props.dark && css`
        color: white;

        span {
            color: white;
        }
    `}

    @media (max-width: 540px) {
        font-size: 34px; 
        font-size: 24px; 
        line-height: 28px;
        margin-bottom: 25px;  
    }    
`

const Title = styled.span`
    display: block;
    font-weight: 700;
    color: #8b75c8;

    @media (max-width: 540px) {
        font-weight: 500; 
        margin-top: 5px; 
        font-size: 22px;
    }
`