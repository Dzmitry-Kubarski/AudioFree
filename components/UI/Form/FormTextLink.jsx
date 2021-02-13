import Link from 'next/link'

import styled from 'styled-components'

import { vars } from 'styles/vars'

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

const TextWrapper = styled.p`
    font-size: 16px;
    text-align: center;
`

const TextLink = styled.a`
    color: ${vars.colorGreen};
    margin-left: 10px;
`