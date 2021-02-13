import styled from 'styled-components'

const ButtonIcon = ({ children }) => {
    return (
        <ButtonIconWrapper type='button'>
            {children}
        </ButtonIconWrapper>
    )
}

export default ButtonIcon

const ButtonIconWrapper = styled.button`
    width: 33px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EEEEEE;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color .3s linear;

    svg {
        width: 22px;
        height: 19px;
        line-height: 33px;  
    } 
    
    path {
        transition: fill .3s linear; 
    }

    &:hover {
        background-color: #0DB10A;
        
        path {
            fill: white;
        }
    }
`