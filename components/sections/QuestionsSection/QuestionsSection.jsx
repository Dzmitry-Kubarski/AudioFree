import { useState } from 'react'
import Link from 'next/link'

import { vars } from 'styles/vars'
import { contentItems } from './contentItems'
import { tabsNames } from './tabsNames'

import styled from 'styled-components'

import { Container } from '@/UI/Container/Container'
import TitleSection from '@/UI/TitleSection/TitleSection'

const QuestionsSection = () => {
    const [activeTab, setActiveTab] = useState(0)

    const selectActiveTab = (index) => {
        setActiveTab(index)
    }

    return (
        <Wrapper>
            <Container>
                <TitleSection subTitle='Что стоит знать' title='при выборе наушников' />

                <Inner>
                    <Tabs>
                        {tabsNames &&
                            tabsNames.map((name, index) => (
                                <TabsItem
                                    className={activeTab === index ? 'active' : ''}
                                    onClick={() => selectActiveTab(index)}
                                    key={`${name}_${index}`}>

                                    <TabsBtn>{name}</TabsBtn>
                                </TabsItem>
                            ))}
                    </Tabs>

                    <Content>
                        {contentItems &&
                            contentItems.map((item, index) => (
                                <ContentInner key={`${item.blogLink}_${index}`} className={activeTab === index ? 'active' : ''}>
                                    <ContentTitle>{item.title}</ContentTitle>

                                    {item.text.map((text, index) => <ContentText key={index}>{text}</ContentText>)}

                                    <Link href={item.blogLink}>
                                        <ContentLink>Перейти в блог</ContentLink>
                                    </Link>
                                </ContentInner>
                            ))}
                    </Content>
                </Inner>
            </Container>
        </Wrapper>
    )
}

export default QuestionsSection

const Wrapper = styled.section`
    padding: 100px 0px;
    background: #F8F5FE;

    @media (max-width: 1220px) {
        display: none;
    }    
`

export const Inner = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;    
`

export const Tabs = styled.ul`
    width: 100%;
    max-width: 495px;
    background: #fefdff;
    border-radius: 9px 0 0 9px;
    overflow-x: hidden;   

    @media (max-width: 1220px) {
        max-width: 100%;
        margin-bottom: 15px;
    } 
`

export const TabsBtn = styled.button`
    display: block;
    width: 100%;
    font-size: 16px;
    line-height: 19px;
    background: transparent;
    color: #8A8A8A;
    text-align: left;
    cursor: pointer;
    padding: 41px 0px;
    padding-left: 45px;
    padding-right: 15px;
`

export const TabsItem = styled.li`
    position: relative;
    border-radius: 9px;

    &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 90%;
        height: 1px;
        background: #E8E8E8;
        transform: translateX(-50%);
    }

    &:last-child {
        &::after {
            display: none;
        }
    }

    &.active {        
        background: #fff;
        border-radius: 0 0 0 9px;
        box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.05);

        &::after {
            display: none;
        }

        ${TabsBtn} {
            font-weight: 500;
            font-size: 18px;
            color: #4E4E4E;
        }
    }
`

export const Content = styled.div`
    min-height: 415px;
    height: 100%;
    background: #fff;
    border-radius: 0 9px 9px 9px;
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.05);
    padding: 40px 30px 57px 85px; 

    @media (max-width: 1220px) {
        padding-left: 45px;
    } 
`

export const ContentInner = styled.div`
    display: none;

    &.active {
        display: block;
    }
`

export const ContentTitle = styled.div`
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 40px;
`

export const ContentText = styled.p`
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 40px;

    &:last-child {
        margin-bottom: 50px;
    }
`

export const ContentLink = styled.a`
    font-weight: bold;
    font-size: 16px;
    text-decoration: underline;
    color: ${vars.colorPurple};
    cursor: pointer;
`
