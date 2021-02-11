// import '../styles/globals.scss'
import { GlobalStyle } from '../styles/global'

// libs
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import 'rc-slider/assets/index.css';

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
