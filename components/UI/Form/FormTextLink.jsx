// core
import Link from 'next/link'

// libs
import styled from 'styled-components'

// utils
import { vars } from '../../../styles/vars'

const FormTextLink = ({ hrefUrl, text, textUrl }) => {
    return (
        <TextWrapper>
            {text}
            <Link href={hrefUrl}>
                <TextLink>{textUrl}</TextLink>
            </Link>
        </TextWrapper>
    )
}

export default FormTextLink

// styles
const TextWrapper = styled.p`
    font-size: 16px;
    text-align: center;
`

const TextLink = styled.a`
    color: ${vars.colorGreen};
    margin-left: 10px;
`