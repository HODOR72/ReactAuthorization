import { useDispatch, useSelector } from 'react-redux'
import { getData, setEditEmail, setEmail, setValidEmail} from '../redux/slices/dataSlice'
import Invalid from '../assets/img/invalid.svg'

export const EmailInput: React.FC<{ edit: boolean }> = ({ edit }) => {
	const dispatch = useDispatch()
	const { email, validEmail, editEmail } = useSelector(getData)

	return (
		<span className='group'>
			<input
				value={email}
				type='text'
				placeholder=' '
				onBlur={() => dispatch(setValidEmail(email))}
				className={`input ${!validEmail ? 'input-invalid' : ''}`}
				readOnly={edit && editEmail}
				onChange={event => dispatch(setEmail(event.target.value))}
				autoComplete='on'
			/>
			<label className={!validEmail ? 'label-invalid' : ''}>Email Adress</label>
			{edit && (
				<label
					className={`hide-ui ${editEmail ? 'hide-ui-acitve' : ''}`}
					onClick={() => dispatch(setEditEmail(!editEmail))}
				>
					<p className='link'>Edit</p>
				</label>
			)}
			<div
				className={`unvalid-text ${!validEmail ? 'unvalid-text-active' : ''}`}
			>
				<img src={Invalid} alt='' /> Enter your email address
			</div>
		</span>
	)
}
