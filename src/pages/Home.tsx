import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getData, setEmail } from '../redux/slices/dataSlice'
import { EmailInput } from '../components'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import Google from '../assets/img/Google.svg'

export const Home: React.FC = () => {
	const { email, validEmail } = useSelector(getData)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleLogin = () => {
		const auth = getAuth()
		const provider = new GoogleAuthProvider()

		signInWithPopup(auth, provider)
			.then(result => {
				const email = result.user.email
				if (email) dispatch(setEmail(email))
				navigate('/account')
			})
			.catch(error => {
				console.log(error)
			})
	}
	return (
		<>
			<h1 className='title'>Authorization</h1>
			<p className='subtitle'>Log in to go to the control panel</p>
			<form action='#' className='form'>
				<EmailInput edit={false} />
				<Link to='/login'>
					<button
						className={`button ${validEmail ? 'button-active' : ''}`}
						disabled={!validEmail || email.length === 0}
					>
						Continue
					</button>
				</Link>
			</form>
			<p className='text'>
				Don’t have an account?
				<Link to='/signup' className='link'>
					Signup
				</Link>
			</p>
			<span className='separator'>or</span>
			<div className='together-wrapper' onClick={handleLogin}>
				<p className='together-text'>
					<img src={Google} alt='Google' /> Continue with Google
				</p>
			</div>
		</>
	)
}
