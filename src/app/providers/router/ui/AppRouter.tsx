import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/PageLoader'

export function AppRouter() {
	const { t } = useTranslation()

	return (
		<Routes>
			{Object.values(routeConfig).map(({ path, element }) => (
				<Route
					key={path}
					path={path}
					element={
						<Suspense fallback={<PageLoader />}>
							<div className="page-wrapper">{element}</div>
						</Suspense>
					}
				/>
			))}
		</Routes>
	)
}
