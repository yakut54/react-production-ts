import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPages'
import { MainPage } from 'pages/MainPage'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

export const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path={'/about'} element={<AboutPage />} />
				<Route path={'/'} element={<MainPage />} />

				{Object.values(routeConfig).map(({ path, element }) => (
					<Route key={path} path={path} element={element} />
				))}
			</Routes>
		</Suspense>
	)
}
