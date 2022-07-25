import { SnackBar } from 'components'
import React from 'react'
import { Outlet } from 'react-router'
import Logo from '../assets/img/logo.png'

export const MainLayout = () => {
	return (
		<>
			<SnackBar />
			<div className='container'>
				<img src={Logo} alt='Logo' className='img' />
				<Outlet />
			</div>
		</>
	)
}
