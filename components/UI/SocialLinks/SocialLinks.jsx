// libs
import styled, { css } from 'styled-components'

// utils
import { vars } from '../../../styles/vars'

// icons
import VkIcon from './../../SVG/VkIcon'
import FbIcon from './../../SVG/FbIcon'
import TelegramIcon from './../../SVG/TelegramIcon'
import WhatsappIcon from './../../SVG/WhatsappIcon'
import ViberIcon from './../../SVG/ViberIcon'

const SocialLinks = ({ light }) => {
    return (
        <List light={light}>
            <ListItem>
                <ListLink href='https://vk.com/' target='_blank' rel='noopener noreferrer'>
                    <VkIcon />
                </ListLink>
            </ListItem>

            <ListItem>
                <ListLink href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
                    <FbIcon />
                </ListLink>
            </ListItem>

            <ListItem>
                <ListLink href='https://telegram.org/' target='_blank' rel='noopener noreferrer'>
                    <TelegramIcon />
                </ListLink>
            </ListItem>

            <ListItem>
                <ListLink href='https://whats-app.ru/' target='_blank' rel='noopener noreferrer'>
                    <WhatsappIcon />
                </ListLink>
            </ListItem>

            <ListItem>
                <ListLink href='https://www.viber.com/' target='_blank' rel='noopener noreferrer'>
                    <ViberIcon />
                </ListLink>
            </ListItem>
        </List>
    )
}

export default SocialLinks

// styles
const List = styled.ul`
    display: flex;
    align-items: center;    

    ${props => props.light && css`
        a {
            svg {
                fill: ${vars.colorPurple};
                opacity: 1;
            }

            :hover {
                svg {
                    fill: ${vars.colorGreen};
                }
            }
        }
    `}
`

const ListItem = styled.li`
    margin-right: 10px;

    &:last-child {
        margin-right: 0;
    }
`

const ListLink = styled.a`
    svg {
        width: 26px;
        height: 26px;
        fill: #fff;
        opacity: .3;
        transition: fill .3s linear;
    }

    &:hover {
        svg {
            fill: ${vars.colorGreen};
        }
    }
`
