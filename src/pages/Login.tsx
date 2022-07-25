import React from 'react'
import { Link } from 'react-router-dom'
import { Button, EmailInput, PasswordInput } from '../components'
export const Login: React.FC = () => {
	return (
		<>
			<h1 className='title'>Enter Your Password</h1>
			<form action='#'>
				<EmailInput edit />
				<PasswordInput />
				<Button type='login' />
			</form>
			<p className='text'>
				Don’t have an account?
				<Link to='/signup' className='link'>
					Sign up
				</Link>
			</p>
		</>
	)
}