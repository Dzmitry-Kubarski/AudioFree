import styled from 'styled-components'

const DescriptionProduct = ({ desc }) => {
    return (
        <Wrapper>
            <TextBlock>
                {desc.map((text, index) =>
                    <p key={index}>{text}</p>
                )}
            </TextBlock>

            <PhotoBlock>
                <img src='/productPage/desc-1.png' alt='Фото мужчины в наушниках' />
            </PhotoBlock>
        </Wrapper>
    )
}

export default DescriptionProduct

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 980px) {
        padding-bottom: 30px;
    }
`

const TextBlock = styled.div`
    max-width: 530px;

    p { 
        font-size: 16px;
        line-height: 26px;
        margin-bottom: 30px;               
    }

    @media (max-width: 980px) {
        max-width: 100%;

        p {
            font-size: 14px;
            line-height: 22px;
            margin-bottom: 20px;
        }
    } 

    @media (max-width: 375px) {
        p {
            font-size: 12px;
            line-height: 18px;
            margin-bottom: 16px;
        }
    } 
`

const PhotoBlock = styled.div`
    align-self: flex-end;

    img {
        max-width: 472px;

        @media (max-width: 1120px) {
            max-width: 350px;
        }
    }

    @media (max-width: 980px) {
        display: none;
    }
`