import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getData } from '../redux/slices/dataSlice'

import { EmailInput } from '../components'

export const Home: React.FC = () => {
	const { email, validEmail } = useSelector(getData)

	return (
		<>
			<h1 className='title'>Auth0</h1>
			<p className='subtitle'>
				Log in to Auth0 to continue to Auth0 Dashboard.
			</p>
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
		</>
	)
}
