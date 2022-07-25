import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface dataSliceState {
	email: string
	validEmail: boolean
	editEmail: boolean
	password: string
	hidePassword: boolean
	validPasswordTypes: boolean[]
	openSnakBar: boolean
}

const initialState: dataSliceState = {
	email: localStorage.getItem('Email') || '',
	validEmail: true,
	editEmail: true,
	password: localStorage.getItem('Password') || '',
	hidePassword: true,
	validPasswordTypes: [false, false, false, false],
	openSnakBar: false,
}

export const dataSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		setEmail(state, action: PayloadAction<string>) {
			state.email = action.payload
		},
		setValidEmail(state, action) {
			state.validEmail = action.payload
				.toLowerCase()
				.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				)
				? true
				: false
		},
		setEditEmail(state, action: PayloadAction<boolean>) {
			state.editEmail = action.payload
		},
		setPassword(state, action: PayloadAction<string>) {
			state.password = action.payload
		},
		setHidePassword(state, action: PayloadAction<boolean>) {
			state.hidePassword = action.payload
		},
		setValidPasswordTypes(state, action: PayloadAction<string>) {
			let arrValidPassword = []

			if (action.payload.length >= 8) arrValidPassword.push(true)
			else arrValidPassword.push(false)

			if (/[a-z]/.test(action.payload)) arrValidPassword.push(true)
			else arrValidPassword.push(false)

			if (/[A-Z]/.test(action.payload)) arrValidPassword.push(true)
			else arrValidPassword.push(false)

			if (/[0-9]/.test(action.payload)) arrValidPassword.push(true)
			else arrValidPassword.push(false)
			state.validPasswordTypes = arrValidPassword
		},
		reset: () => initialState,
		setOpenSnackBar(state, action: PayloadAction<boolean>) {
			state.openSnakBar = action.payload
		},
	},
})

export const {
	setEmail,
	setValidEmail,
	setEditEmail,
	setPassword,
	setHidePassword,
	setValidPasswordTypes,
	reset,
	setOpenSnackBar,
} = dataSlice.actions
export const getData = (state: RootState) => state.dataSliceReducer

export default dataSlice.reducer
