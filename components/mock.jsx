// core
import Link from 'next/link'

const MockPage = ({ title }) => {
    return (


        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '40px', flexDirection: 'column' }}>

            <h1 style={{ marginBottom: '20px', fontSize: '32px' }}>{title}</h1>

            <div>
                <h2 style={{ textAlign: 'center', color: 'tomato', marginBottom: '20px' }}>Эта страница еще в разработке.</h2>

                <Link href='/'>
                    <a style={{ display: 'block', textAlign: 'center', fontSize: '18px', textDecoration: 'underline' }}>На главную</a>
                </Link>

                <img src='/mock.jpg' alt='developer s illustration' style={{ display: 'block' }} />
            </div>
        </div>
    )
}

export default MockPage