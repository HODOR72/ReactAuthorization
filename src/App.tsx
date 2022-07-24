import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from './pages/Signup'
import Logo from './assets/img/logo.png'

function App() {
  return (
		<div className='container'>
			<img src={Logo} alt='Logo' className='img' />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>
		</div>
	)
}

export default App;