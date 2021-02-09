// core 
import React from 'react'

// libs
import styled, { css } from 'styled-components'

// utils
import { vars } from '../../../styles/vars'

const Button = React.forwardRef(({ type = 'button', variant, full, medium, large, children, onClick, href }, ref) => {
    return (
        <StyledButton
            type={type}
            variant={variant}
            full={full}
            medium={medium}
            large={large}
            href={href}
            onClick={onClick}
            ref={ref}>
            {children}
        </StyledButton>
    )
})

export default Button

// styles
const StyledButton = styled.a`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: bold;
    border: none;
    border-radius: 220px;
    color: #fff;
    box-shadow: 0px 2px 0px rgba(139, 117, 200, .9);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.13) 98.96%), #8B75C8;   
    transition: box-shadow .2s linear, background .2s linear;
    cursor: pointer;
    padding: 12px 17px; 
    
    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: 220px;
        box-shadow: 0px 8px 30px rgba(139, 117, 200, 0.5);
        opacity: 1;
        transition: opacity .2s linear;
    }

    &:hover {
        box-shadow: 0px 0px 0px rgba(139, 117, 200, .9);

        &:after {
            opacity: .5;
        }
    } 
    
    // modifiers
    ${props => props.variant === 'outline' && css`
        font-size: 14px;
        color: ${vars.colorBlack};
        border: 1px solid #A9A9A9;
        background-color: transparent;
        background: none;
        box-shadow: none;

        &:after {
            display: none;
        }
    `}

    ${props => props.variant === 'green' && css`
        color: #fff;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #91CF0D 100%), #97D413;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    `}

    ${props => props.full && css`
        width: 100%;
    `}

    ${props => props.medium && css`
        min-height: 52px;
        font-size: 14px;
    `}

    ${props => props.large && css`
        min-height: 74px;
        font-size: 18px;

        @media (max-width: 340px) {
            font-size: 16px;
        }
    `}
`