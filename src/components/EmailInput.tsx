import { useDispatch, useSelector } from 'react-redux'
import {
	getData,
	setEditEmail,
	setEmail,
	setValidEmail,
} from '../redux/slices/dataSlice'
import Invalid from '../assets/img/invalid.svg'

const EmailInput = ({ edit }: any) => {
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
					className='hide-ui'
					onClick={() => dispatch(setEditEmail(!editEmail))}
				>
					<p className='link'>Edit</p>
				</label>
			)}
			<div
				className={`unvalid-text ${!validEmail ? 'unvalid-text-active' : ''}`}
			>
				<img src={Invalid} alt='' /> Введите адрес электронной почты
			</div>
		</span>
	)
}

export default EmailInput
