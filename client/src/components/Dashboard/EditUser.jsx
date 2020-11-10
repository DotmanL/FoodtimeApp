import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import ButtonSpin from '../ButtonSpin/ButtonSpin'
import { connect } from 'react-redux'

import { FormContainer, FormInput, Container, Button, FormLabel } from './EditUser.styles'

import { edit, loadUser } from '../../Redux/User/user.actions'



const initialState = {
	lastName: '',
	firstName: '',
	phoneNumber: '',
	city: '',
}

const EditUser = ({ edit, user: { user, loading }, loadUser }) => {
	const [userCredentials, setUserCredentials] = useState(initialState)

	const { lastName, firstName, phoneNumber, city } = userCredentials


	useEffect(() => {
		if (!user) loadUser()
		if (!loading && user) {
			const userData = { ...initialState }
			for (const key in user) {
				if (key in userData) userData[key] = user[key]
			}

			setUserCredentials(userData)
		}
	}, [loading, loadUser, user])

	const handleSubmit = async (event) => {
		event.preventDefault()
    edit(userCredentials)
    
 
	}

	const handleChange = (event) => {
		const { name, value } = event.target

		setUserCredentials({ ...userCredentials, [name]: value })
	}

	return (
		<FormContainer>
			<form onSubmit={handleSubmit}>
				<Container>
					<FormLabel> Last Name
					<FormInput
						type="text"
						name="lastName"
						value={lastName}
						onChange={handleChange}
            required
					/>
					</FormLabel>
					
					<FormLabel> First Name
					<FormInput
						type="text"
						name="firstName"
						value={firstName}
						onChange={handleChange}
						required
					/>
					</FormLabel>

					<FormLabel> City
					<FormInput
						type="text"
						name="city"
						value={city}
						onChange={handleChange}
						required
					/>
					</FormLabel>

					<FormLabel> Phone Number
					<FormInput
						type="tel"
						name="phoneNumber"
						value={phoneNumber}
						onChange={handleChange}
						required
					/>
					</FormLabel>

					<Button  type="submit">
						{!loading && <span>Submit </span>}
						{loading && <ButtonSpin />}
					</Button>
				</Container>
			</form>
		</FormContainer>
	)
}

EditUser.propTypes = {
	edit: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
	loadUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	user: state.user,
})

export default connect(mapStateToProps, { edit, loadUser })(EditUser)
