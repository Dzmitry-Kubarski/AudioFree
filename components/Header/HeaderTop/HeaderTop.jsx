// core
import Link from 'next/link'

// libs
import styled from 'styled-components'

// components
import Logo from '../../UI/Logo/Logo'
import { Container } from './../../UI/Container/Container'

// utils
import { vars } from '../../../styles/vars'

const HeaderTop = () => {
    return (
        <StyledWrapper>
            <Container>
                <StyledInner>
                    <Logo />

                    <StyledMenu>
                        <StyledMenuItem>
                            <Link href="/delivery"><a>Доставка и оплата</a></Link>
                        </StyledMenuItem>

                        <StyledMenuItem>
                            <Link href="/guarantee"><a>Гарантия и возврат</a></Link>
                        </StyledMenuItem>

                        <StyledMenuItem>
                            <Link href="/points"><a>Пункты самовывоза</a></Link>
                        </StyledMenuItem>

                        <StyledMenuItem>
                            <Link href="/contacts"><a>Контакты</a></Link>
                        </StyledMenuItem>
                    </StyledMenu>

                </StyledInner>
            </Container>
        </StyledWrapper>

    )
}

export default HeaderTop

// styles
export const StyledWrapper = styled.div`
    background-color: ${vars.colorDarkBlue};
`

export const StyledInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0px;

    @media (max-width: 768px) {
        display: none;   
    }
`

export const StyledMenu = styled.ul`
    display: flex;
    align-items: center;
`

export const StyledMenuItem = styled.li`
    margin-right: 30px;

    &:last-child {
        margin-right: 0;
    }

    a {
        font-size: 13px;
        line-height: 15px;
        color: white;
        transition: color .2s linear;

        &:hover {
            color: ${vars.colorGreen};
        }
    }
`
