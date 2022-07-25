import React from 'react'
import { Snackbar } from '@mui/material'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { useDispatch, useSelector } from 'react-redux'
import { getData, setOpenSnackBar } from 'redux/slices/dataSlice'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props,ref) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

export const SnackBar = () => {
	const dispatch = useDispatch()
	const { openSnakBar } = useSelector(getData)

	const handleClose = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return
		}

		dispatch(setOpenSnackBar(false))
	}

	return (
		<div>
			<Snackbar
				open={openSnakBar}
				autoHideDuration={6000}
				onClose={handleClose}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			>
				<Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
					Password or email entered incorrectly or already in use
				</Alert>
			</Snackbar>
		</div>
	)
}
