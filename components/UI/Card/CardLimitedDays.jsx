// libs
import styled from 'styled-components'

// components
import LabelDays from './../LabelDays/LabelDays'

const CardLimitedDays = ({ countDay }) => {
    return (
        <CardLimiedDaysWrap>
            <LabelDays days={countDay} />
            <p>До конца акции <br /> на этот товар осталось:</p>
        </CardLimiedDaysWrap>
    )
}

export default CardLimitedDays

// styles
const CardLimiedDaysWrap = styled.div`
    display: flex;
    align-items: center;
    border-top: 1px solid #ebebeb;
    padding-top: 20px;
    
    p {
        font-size: 12px;
        line-height: 14px;
        margin-left: 20px;
    }
`