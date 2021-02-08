// libs
import styled from 'styled-components'

// components
import LabelSale from './../LabelSale/LabelSale'

const CardLabelSale = ({ count }) => {
    return (
        <CardLabelSaleWrap>
            <LabelSale>-{count}%</LabelSale>
        </CardLabelSaleWrap>
    )
}

export default CardLabelSale

// styles
const CardLabelSaleWrap = styled.div`
    position: absolute;
    right: 15px;
    top: 15px;

    @media (max-width: 540px) {
        right: 7px;
        top: 7px; 
    }
`