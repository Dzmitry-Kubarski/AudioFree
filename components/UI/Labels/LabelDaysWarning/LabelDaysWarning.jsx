import styled from 'styled-components'

const LabelDaysWarning = ({ countDay }) => {
    return (
        <Wrapper>
            <Circle>!</Circle>
            <span>До конца акции осталось дней: <b>{countDay}</b>
            </span>
        </Wrapper>
    )
}

export default LabelDaysWarning

const Wrapper = styled.div`
    display: flex;
    align-items: center;

    span {
        max-width: 105px;
    }
`

const Circle = styled.div`
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 24px;
    line-height: 28px;
    background-color: #FF4E4E;
    color: white;
    border-radius: 50%;
    margin-right: 6px;    
`