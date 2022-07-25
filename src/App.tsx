import { MainLayout } from 'layouts/MainLayout'
import { Routes, Route } from 'react-router'
import { Home, Login, Signup, Account } from './pages'

export function App() {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route path='' element={<Home />} />
				<Route path='login' element={<Login />} />
				<Route path='signup' element={<Signup />} />
				<Route path='account' element={<Account />} />
			</Route>
		</Routes>
	)
}