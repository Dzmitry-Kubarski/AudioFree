import styled from 'styled-components'

import LabelSale from '@/UI/Labels/LabelSale/LabelSale'

const CardLabelSale = ({ count }) => {
    return (
        <CardLabelSaleWrap>
            <LabelSale count={count} />
        </CardLabelSaleWrap>
    )
}

export default CardLabelSale

const CardLabelSaleWrap = styled.div`
    position: absolute;
    right: 15px;
    top: 15px;

    @media (max-width: 540px) {
        right: 7px;
        top: 7px; 
    }
`