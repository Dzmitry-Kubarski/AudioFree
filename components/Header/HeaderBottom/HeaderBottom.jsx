// core
import Link from 'next/link'

// libs
import styled from 'styled-components'

// utils
import { vars } from '../../../styles/vars'

// icons
import BurgerIcon from '../../SVG/BurgerIcon'
import AccountIcon from '../../SVG/AccountIcon'

// components
import { Container } from './../../UI/Container/Container'

const HeaderBottom = () => {
    return (
        <StyledWrapper>
            <Container>
                <StyledInner>

                    <StyledMenuBtnWrap>
                        <StyledMenuBtn>
                            <BurgerIcon />
                            <Link href='/products'><a>Каталог товаров</a></Link>
                        </StyledMenuBtn>
                    </StyledMenuBtnWrap>

                    <StyledMenu>
                        <StyledMenuList>
                            <StyledMenuItem>
                                <Link href='/'><a>Главная</a></Link>
                            </StyledMenuItem>

                            <StyledMenuItem>
                                <Link href='/discounts'><a>Скидки</a></Link>
                            </StyledMenuItem>

                            <StyledMenuItem>
                                <Link href='/new-products'><a>Новинки</a></Link>
                            </StyledMenuItem>

                            <StyledMenuItem>
                                <Link href='/brands'><a>Бренды</a></Link>
                            </StyledMenuItem>

                            <StyledMenuItem>
                                <Link href='/blog'><a>Блог</a></Link>
                            </StyledMenuItem>

                            <StyledMenuItem>
                                <Link href='/promotions'><a>Акции</a></Link>
                            </StyledMenuItem>
                        </StyledMenuList>
                    </StyledMenu>

                    <StyledLoginWrap>
                        <Link href='/login'>
                            <StyledLogin>
                                <AccountIcon />
                                <span>Вход/Регистрация</span>
                            </StyledLogin>
                        </Link>
                    </StyledLoginWrap>

                </StyledInner>
            </Container>
        </StyledWrapper>
    )
}

export default HeaderBottom

// styles
export const StyledWrapper = styled.div`
    border: 1px solid #E7E7E7;
`

export const StyledInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1120px) {
        display: none;   
    }
`

export const StyledMenuBtnWrap = styled.div`
    width: 100%;
    max-width: 270px;
    flex-shrink: 0;
    border-left: 1px solid #E7E7E7;
    border-right: 1px solid #E7E7E7;
`

export const StyledMenuBtn = styled.div`
    width: 100%;
    text-align: left;
    padding: 12px 0px;
    padding-left: 15px;
    transition: all .2s linear;

    svg {
        width: 19px;
        height: 17px;
        margin-right: 30px;
        transition: all .2s linear;
    }

    span, a {
        font-weight: 500;
        font-size: 18px;
        color: ${vars.colorBlack};
        transition: color .2s linear;
    }

    &:hover {
        span, a {
            color: ${vars.colorGreen};
        }

        svg {
            fill: ${vars.colorGreen};        
        }
    }
`

export const StyledMenu = styled.nav`
    width: 100%;
    padding: 0px 70px;
`

export const StyledMenuList = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
`

export const StyledMenuItem = styled.li`
    margin-right: 35px;

    &:last-child {
        margin-right: 0;
    }

    a {
        position: relative;
        font-weight: normal;
        font-size: 14px;
        color: ${vars.colorBlack};
        padding: 12px 0px;
        transition: all .2s linear;    

        &::after {
            content: '';
            display: block;
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 100%;
            height: 3px;
            border-radius: 10px;
            background-color: ${vars.colorGreen};
            opacity: 0;
            transition: opacity .2s linear;
        }

        &:hover {
            color: ${vars.colorGreen};

            &::after {
                opacity: 1;
            }
        }

        &.active {
            font-weight: bold;
        }
    }
`

export const StyledLoginWrap = styled.div`
    width: 100%;
    max-width: 270px;
    border-left: 1px solid #E7E7E7;
    border-right: 1px solid #E7E7E7;
`

export const StyledLogin = styled.a`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 0px;
    cursor: pointer;

    svg {
        width: 18px;
        height: 18px;
        margin-right: 10px;
        transition: all .2s linear;
    }

    span {
        font-weight: normal;
        font-size: 14px;
        color: ${vars.colorBlack};
        transition: all .2s linear;
    }

    &:hover {
        span {
            color: ${vars.colorGreen};
        }

        svg {
            fill: ${vars.colorGreen};                
        }
    }
`
