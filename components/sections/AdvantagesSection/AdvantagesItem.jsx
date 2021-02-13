import styled, { css } from 'styled-components'

import { vars } from 'styles/vars'

const AdvantagesItem = ({ right, item }) => {
    return (
        <ItemWrapper right={right}>
            <ItemCircle right={right}>
                <ItemNumber right={right}>{item.number}</ItemNumber>
            </ItemCircle>

            <div>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemText>{item.text}</ItemText>
            </div>
        </ItemWrapper>
    )
}

export default AdvantagesItem

export const ItemCircle = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 45px;
    height: 45px;
    background: #fff;
    border-radius: 50%;
    margin-right: 25px;

    &::after {
        content: '';
        display: block;
        position: absolute;
        width: 10px;
        height: 10px;
        background: ${vars.colorPurple};
        border-radius: 50%;
    }    

    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 100%;
        left: 50%;
        width: 1px;
        height: 100px;
        background: #FFFFFF;
        transform: translateX(-50%);
        opacity: .1;
    }  

    ${props => props.right && css`
        order: 1;
        margin-right: 0;
        margin-left: 25px;
    `}
`

export const ItemWrapper = styled.div`
    display: flex;
    justify-content: center;
    color: #fff;
    margin-bottom: 50px;

    &:last-child {
        ${ItemCircle} {
            &::before {
                display: none;
            }
        }
    }

    ${props => props.right && css`
        text-align: right;
    `}
`

export const ItemNumber = styled.span`
    position: absolute;
    left: -30px;
    top: 50%;
    transform: translateY(-50%);
    font-weight: 900;
    font-size: 18px;
    color: #816fb2;

    ${props => props.right && css`
        left: auto;
        right: -30px;
    `}

    @media (max-width: 1250px) {
        display: none; 
    }

    @media (max-width: 1020px) {
        display: block; 
    }
`

const ItemTitle = styled.h3`
    font-size: 24px;
    margin-bottom: 10px;
    padding-top: 10px;
`

const ItemText = styled.p`
    font-size: 12px;
    line-height: 14px;
`
