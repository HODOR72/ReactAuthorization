import React from 'react'
import {
	getData,
	setHidePassword,
	setPassword,
	setValidPasswordTypes,
} from '../redux/slices/dataSlice'
import { useDispatch, useSelector } from 'react-redux'

import HidePass from '../assets/img/hidePass.svg'
import Circle from '../assets/img/circle.svg'
import CircleConfirmed from '../assets/img/circle-confirmed.svg'

const PasswordInput = () => {
	const dispatch = useDispatch()
	const { password, hidePassword, validPasswordTypes } = useSelector(getData)

	React.useEffect(() => {
		dispatch(setValidPasswordTypes(password))
	}, [password])

	return (
		<span className='group'>
			<input
				value={password}
				type={hidePassword ? 'password' : 'text'}
				placeholder=' '
				className='input'
				onChange={event => dispatch(setPassword(event.target.value))}
				autoComplete='on'
			/>
			<label>Password</label>
			<label className='hide-ui'>
				<img
					src={HidePass}
					alt=''
					onClick={() => dispatch(setHidePassword(!hidePassword))}
				/>
			</label>
			<div className={`validate ${password.length ? 'validate-active' : ''}`}>
				<p className='validate__text'>Your password must contain:</p>
				<p className='validate__text'>
					<img
						src={validPasswordTypes[0] ? CircleConfirmed : Circle}
						alt=''
						className='validate-img'
					/>
					At least 8 Characters
				</p>
				<p className='validate__text'>
					<img
						src={validPasswordTypes[1] ? CircleConfirmed : Circle}
						alt=''
						className='validate-img'
					/>
					Lower case letters (a-z)
				</p>
				<p className='validate__text'>
					<img
						src={validPasswordTypes[2] ? CircleConfirmed : Circle}
						alt=''
						className='validate-img'
					/>
					Upper case letters (A-Z)
				</p>
				<p className='validate__text'>
					<img
						src={validPasswordTypes[3] ? CircleConfirmed : Circle}
						alt=''
						className='validate-img'
					/>
					Numbers (0-9)
				</p>
			</div>
		</span>
	)
}

export default PasswordInput
