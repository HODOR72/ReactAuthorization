import { useSelector } from 'react-redux'
import { getData } from '../redux/slices/dataSlice'

const Button: React.FC = () => {
	const { password, validEmail, validPasswordTypes } = useSelector(getData)
	return (
		<button
			className={`button ${
				!validPasswordTypes.includes(false) && validEmail ? 'button-active' : ''
			}`}
			disabled={
				password.length === 0 ||
				validPasswordTypes.includes(false) ||
				!validEmail
			}
		>
			Continue
		</button>
	)
}
export default Button
