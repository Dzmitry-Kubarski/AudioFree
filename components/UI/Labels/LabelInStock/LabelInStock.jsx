import styled from 'styled-components'

import { vars } from 'styles/vars'
import LabelChecked from '@/UI/Labels/LabelChecked/LabelChecked'

const LabelInStock = () => {
    return (
        <Wrapper>
            <LabelChecked />
            В наличии
        </Wrapper>
    )
}

export default LabelInStock

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    color: ${vars.colorBlack};
    text-align: center;
    border: 1px solid #DCDCDC;
    border-radius: 14px;
    padding: 5px 12px 5px 12px;   
    margin-right: auto;   

    @media (max-width: 380px) {
        font-size: 9px;
        padding: 5px 8px;

        svg { 
            width: 10px;
            height: 10px;
            margin-right: 5px;
        }
    } 
`