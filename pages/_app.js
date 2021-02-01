// import '../styles/globals.scss'
import { GlobalStyle } from '../styles/global'

// function MyApp({ Component, pageProps }) {
// 	return <Component {...pageProps} />
// }

// export default MyApp

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}
