// libs
import styled from 'styled-components'

const LabelSale = ({ children }) => {
    return (
        <LabelSaleWrapper>
            {children}
        </LabelSaleWrapper>
    )
}

export default LabelSale

// styles
const LabelSaleWrapper = styled.div`
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #97D413;
    border-radius: 50%;
    font-weight: 700;
    font-size: 13px;    
`