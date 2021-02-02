// libs
import styled from 'styled-components'

const LabelDays = ({ days }) => {
    return (
        <LabelWrapper>
            <LabelCount>{days}</LabelCount>
            <LabelText>Дней</LabelText>
        </LabelWrapper>
    )
}

export default LabelDays

// styles
const LabelWrapper = styled.div`
    width: 54px;
    height: 54px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #8B75C8;
    border-radius: 50%;
`

const LabelCount = styled.span`
    font-weight: 700;
    font-size: 22px;    
`

const LabelText = styled.span`
    font-weight: 400;
    font-size: 10px;    
`