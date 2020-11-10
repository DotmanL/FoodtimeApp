import axios from 'axios'

import { toast } from 'react-toastify'

import {
	GET_PROFILE,
	PROFILE_ERROR,
	DELETE_ACCOUNT,
	CLEAR_PROFILE,
	GET_PROFILES,
	PROFILE_START,
} from './profile.types'

//Get current users profile

export const getCurrentProfile = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/profile/me')
		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		})
	} catch (err) {
		dispatch({ type: CLEAR_PROFILE })
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}

//Get all profiles

export const getProfiles = () => async (dispatch) => {
	dispatch({ type: CLEAR_PROFILE })
	try {
		const res = await axios.get('/api/profile')
		dispatch({
			type: GET_PROFILES,
			payload: res.data,
		})
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}

//Get profile by Id
export const getProfileById = (user_id) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/profile/user/${user_id}`)
		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		})
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}

//Get Github repos

//Create or Update Profile

export const createProfile = (address, edit=false) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}

    const body =JSON.stringify({address});

		dispatch({
			type: PROFILE_START,
		})

		const res = await axios.post('/api/profile', body, config)
    
		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		})
		console.log(res, 'create prof');
		
    toast.success(edit ? "Profile Updated" :'Profile Created')
  
    

	} catch (err) {
		const errors = err.response.data.errors

		if (errors) {
			errors.forEach((error) => toast.error('Invalid Credentials', error.msg))
		}
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}



// Add Image



export const addImage = (formData) => async (dispatch) => {

  try {
    
    const config = {
      headers: {
        'Content-Type': undefined
      },
    }

      dispatch({
			type: PROFILE_START,
		})

		const res = await axios.put('/api/profile/', formData, config)

		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		})
		toast.success('Profile Updated')
	} catch (err) {
		const errors = err.response.data.errors

		if (errors) {
			errors.forEach((error) => toast.error(error.msg))
		}
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}


//Delete Account & profile

export const deleteAccount = () => async (dispatch) => {
	if (window.confirm('Are you sure? This can NOT be reversed')) {
		try {
			await axios.delete('api/profile')

			dispatch({
				type: CLEAR_PROFILE,
			})

			dispatch({
				type: DELETE_ACCOUNT,
			})
			toast.info('Your account has been permanently deleted')
		} catch (err) {
			dispatch({
				type: PROFILE_ERROR,
				payload: { msg: err.response.statusText, status: err.response.status },
			})
		}
	}
}
