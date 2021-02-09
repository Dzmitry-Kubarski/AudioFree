// libs
import styled from 'styled-components'

const FormPolitics = () => {
    return (
        <FormPoliticsText>
            Нажимая кнопку "Отправить" Вы даёте свое согласие на обработку введенной персональной информации
        </FormPoliticsText>
    )
}

export default FormPolitics

// styles
const FormPoliticsText = styled.p`
    font-size: 12px;
    line-height: 14px;
    color: #CCCCCC;
    margin: 0 auto;
    margin-top: 22px;
`