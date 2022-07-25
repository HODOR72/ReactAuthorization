import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getData, reset, setEditEmail, setOpenSnackBar } from '../redux/slices/dataSlice'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export const Button: React.FC<{ type: string }> = ({ type }) => {
	const { password, validEmail, validPasswordTypes, email } = useSelector(getData)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleLogin = () => {
		const auth = getAuth()

		if (type === 'login') {
			signInWithEmailAndPassword(auth, email, password)
				.then(() => {
					navigate('/account')
				})
				.catch(() => {
					dispatch(reset())
					dispatch(setEditEmail(false))
					dispatch(setOpenSnackBar(true))
				})
		}
		if (type === 'signup') {
			createUserWithEmailAndPassword(auth, email, password)
				.then(() => {
					navigate('/account')
				})
				.catch(() => {
					dispatch(reset())
					dispatch(setEditEmail(false))
					dispatch(setOpenSnackBar(true))
				})
		}
	}

	return (
		<button
			type='button'
			className={`button ${
				!validPasswordTypes.includes(false) && validEmail ? 'button-active' : ''
			}`}
			disabled={
				password.length === 0 ||
				validPasswordTypes.includes(false) ||
				!validEmail
			}
			onClick={() => handleLogin()}
		>
			Continue
		</button>
	)
}
export default Button
