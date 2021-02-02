// core
import Head from 'next/head'

//libs
import styled from 'styled-components'

// componnets
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function MainLayout({ children, title }) {
    return (
        <>
            <Head>
                <meta name='description' content='Интернет магазин беспроводных наушников' />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet"></link>

                <title>{title}</title>
            </Head>

            <StyledPage>
                <Header />

                <StyledMain>
                    {children}
                </StyledMain>

                <Footer />
            </StyledPage>
        </>
    )
}

// styles
const StyledPage = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const StyledMain = styled.main`
   flex-grow: 1;
`