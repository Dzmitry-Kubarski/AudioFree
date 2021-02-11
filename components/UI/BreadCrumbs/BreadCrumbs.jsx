// libs
import styled from 'styled-components'

const BreadCrumbs = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default BreadCrumbs

// styles
const Wrapper = styled.ol`
    display: flex;
    align-items: center;

    li {
        font-size: 12px;
        color: #B2B2B2;
        margin-right: 4px;
    }

    a {
        color: #B2B2B2; 
        transition: color .3s linear;

        &:hover {
            color: #97D413;         
        }
    }
`
