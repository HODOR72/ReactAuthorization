import React from 'react'
import { getData, reset } from 'redux/slices/dataSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { deleteUser, getAuth } from 'firebase/auth'

export const Account: React.FC = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { email, password } = useSelector(getData)

	localStorage.setItem('Email', email)
	localStorage.setItem('Password', password)

	const dataReset = () => {
		dispatch(reset())
		navigate('/')
	}

	const deleteAccount = () => {
		const auth = getAuth()
		const user = auth.currentUser
		let result = window.confirm('Are you sure you want to delete your account?')
		if (result && user) {
			deleteUser(user)
				.then(() => {
					navigate('/')
					localStorage.clear()
					dispatch(reset())
				})
				.catch(error => {
					console.log('An error occurred while deleting a user')
					console.log(error)
				})
		}
	}

	if (!email) {
		return (
			<div className='account-text'>
				you are not authorized:
				<Link to='/' onClick={dataReset} className='link'>
					(Go to login page)
				</Link>
			</div>
		)
	}

	return (
		<div className='account-text'>
			You have successfully logged in: {email}
			<span onClick={deleteAccount} className='link'>
				Delete account
			</span>
			<span onClick={dataReset} className='link'>
				(exit)
			</span>
		</div>
	)
}