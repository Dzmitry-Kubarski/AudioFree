import styled from 'styled-components'
import React from 'react';

const BreadCrumbs = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default BreadCrumbs


const Wrapper = styled.div`
    display: flex;
    align-items: center;   

    a {
        color: #B2B2B2; 
        transition: color .3s linear;

        &:hover {
            color: #97D413;         
        }
    }

    span {
        font-size: 12px;
        color: #B2B2B2;
        margin-right: 4px;
    }
`
