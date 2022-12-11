import { Link, Route, Routes } from 'react-router-dom'
import { AboutPageAsync } from './pages/AboutPages/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import './index.scss'
import { Suspense } from 'react'

const App = () => {
	return (
		<div className="app">
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPageAsync />} />
					<Route path={'/'} element={<MainPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
