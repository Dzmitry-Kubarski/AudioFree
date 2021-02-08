// core
import Link from 'next/link'

// libs
import styled from 'styled-components'

// components
import { Container } from './../UI/Container/Container'
import FooterCallback from './FooterCallback'
import Contacts, { IconWrap } from './../UI/Contacts/Contacts'
import SocialLinks from './../UI/SocialLinks/SocialLinks'

// utils
import { accountItems, categoriesItems, shopItems } from './listItems'

const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <Inner>
                    <Col className='accountFooter'>
                        <Title>Личный кабинет</Title>
                        <ul>
                            {accountItems.map((item) =>
                                <ListItem key={item.id}>
                                    <Link href={item.hrefUrl} target='_blank' rel='noopener noreferrer'>
                                        <ListLink >{item.title}</ListLink>
                                    </Link>
                                </ListItem>
                            )}
                        </ul>
                        <FooterCallback />
                    </Col>

                    <Col className='categoriesFooter'>
                        <Title>Категории</Title>
                        <ul>
                            {categoriesItems.map((item) =>
                                <ListItem key={item.id}>
                                    <Link href={item.hrefUrl} target='_blank' rel='noopener noreferrer'>
                                        <ListLink>{item.title}</ListLink>
                                    </Link>
                                </ListItem>
                            )}
                        </ul>
                    </Col>

                    <Col>
                        <Title>Магазин</Title>
                        <ul>
                            {shopItems.map((item) =>
                                <ListItem key={item.id}>
                                    <Link href={item.hrefUrl} target='_blank' rel='noopener noreferrer'>
                                        <ListLink>{item.title}</ListLink>
                                    </Link>
                                </ListItem>
                            )}
                        </ul>
                    </Col>

                    <Col className='contacts'>
                        <Title>Контакты</Title>

                        <ul>
                            <ContactItemWrap>
                                <Contacts number='8 800 551-92-02' subTitle='Бесплатный звонок по РФ' phone />
                            </ContactItemWrap>

                            <ContactItemWrap>
                                <Contacts subTitle='Санкт-Петербург,' title='Дачный пр. 21' geo />
                            </ContactItemWrap>

                            <ContactItemWrap>
                                <Contacts subTitle='По всем вопросам пишите:' title='hello@audiofree.ru' email />
                            </ContactItemWrap>
                        </ul>

                        <SocialWrap>
                            <SocialLinks />
                        </SocialWrap>
                    </Col>
                </Inner>
            </Container>
        </Wrapper>
    )
}

export default Footer

// styles
const Wrapper = styled.footer`
    background: #251C41;
    padding-top: 70px;

    @media (max-width: 540px) {
        padding-top: 50px;
    }
`

const Inner = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    color: #fff;
    padding-bottom: 50px;

    .categoriesFooter {
        @media (max-width: 940px) {
            display: none;
        }
    }
    
    @media (max-width: 768px) {
        .accountFooter {
            display: none;
        } 

        justify-content: space-evenly;  
    }

    @media (max-width: 540px) {
        flex-direction: column;
        align-items: center;  
        text-align: center;

        .contacts {
           > ul {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
    }
   
`

const Col = styled.div`
    @media (max-width: 540px) {  
        width: 100%;
        border-bottom: 1.5px solid #383050;
        padding-bottom: 30px;

        margin-bottom: 25px;

        &:last-child {
            margin-bottom: 0;
        }        
    }     
`

const Title = styled.div`
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 50px;

    @media (max-width: 540px) {
        font-size: 24px;
        margin-bottom: 30px;
    }
`

const ListItem = styled.li`
    margin-bottom: 10px;

    &:last-child {
        margin-bottom: 0;
    }
`

const ListLink = styled.a`
    font-size: 14px;
    cursor: pointer;
    transition: color .2s linear;

    &:hover {
        color: #97d413;
    }

    @media (max-width: 540px) {
        font-size: 16px;
    }
`

const ContactItemWrap = styled.li`
    margin-bottom: 15px;

    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 540px) {
        ${IconWrap} {
            display: none;
        } 
    }

    
`

const SocialWrap = styled.div`
    padding-left: 55px;
    margin-top: 20px;

    @media (max-width: 540px) {
        padding-left: 0px; 
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
