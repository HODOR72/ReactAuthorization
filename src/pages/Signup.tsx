import React from 'react'
import { Link } from 'react-router-dom'
import { EmailInput, PasswordInput, Button } from '../components'
export const Signup: React.FC = () => {
	return (
		<>
			<h1 className='title'>Create your Account</h1>
			<form action='#'>
				<EmailInput edit />
				<PasswordInput />
				<Link to='/signup'>
					<Button />
				</Link>
			</form>
			<p className='text'>
				Already have an account?
				<Link to='/login' className='link'>
					Login
				</Link>
			</p>
		</>
	)
}
