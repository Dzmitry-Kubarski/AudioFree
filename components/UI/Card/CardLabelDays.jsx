import styled from 'styled-components'

import LabelDays from '@/UI/Labels/LabelDays/LabelDays'

const CardLabelDays = ({ countDay }) => {
    return (
        <LabelDaysWrap>
            <LabelDays days={countDay} />
            <p>До конца акции <br /> на этот товар осталось:</p>
        </LabelDaysWrap>
    )
}

export default CardLabelDays

const LabelDaysWrap = styled.div`
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