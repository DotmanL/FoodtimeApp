import axios from 'axios'

import { toast } from 'react-toastify'

import { ADD_CATEGORY, GET_CATEGORIES, GET_CATEGORY, CATEGORY_START, CATEGORY_ERROR, DELETE_CATEGORY } from './category.types'

export const addCategory = (name) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}

    const body =JSON.stringify({name});

		dispatch({
			type: CATEGORY_START,
		})

		const res = await axios.post('/api/category', body, config)
		dispatch({
			type: ADD_CATEGORY,
			payload: res.data,
		})
    toast.success("Category added")

	} catch (err) {
		const errors = err.response.data.errors

		if (errors) {
			errors.forEach((error) => toast.error("Category not created" , error.msg))
		}
		dispatch({
			type: CATEGORY_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}

//Get all categories
export const getCategories = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/category/all')
		dispatch({
			type: GET_CATEGORIES,
			payload: res.data,
		})
	} catch (err) {
		dispatch({
			type: CATEGORY_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}

export const deleteCategory = (id) => async (dispatch) => {
	try {

	await axios.delete(`/api/category/${id}`)
		dispatch({
			type: DELETE_CATEGORY,
			payload: id,
		})

		toast.success("Category Deleted")
	} catch (err) {
		dispatch({
			type: CATEGORY_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}


export const getCategoryById = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/category/${id}`)
		dispatch({
			type: GET_CATEGORY,
			payload: res.data,
		})
	} catch (err) {
		dispatch({
			type: CATEGORY_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}

export const editCategory = (categoryID, name) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}
    const body =JSON.stringify({name});

		dispatch({
			type: CATEGORY_START,
		})

		const res = await axios.put(`/api/category/${categoryID}`, body, config)
		dispatch({
			type: GET_CATEGORY,
			payload: res.data,
		})
		console.log(res);

		toast.success("Category Edited")

	} catch (err) {
		dispatch({
			type: CATEGORY_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}