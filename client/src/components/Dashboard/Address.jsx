import React, { useState } from 'react'
import PropTypes from 'prop-types'

import ButtonSpin from '../ButtonSpin/ButtonSpin'
import { connect } from 'react-redux'

import { FormContainer, FormInput, Container, Button } from './EditUser.styles'

import { createProfile } from '../../Redux/Profile/profile.actions'

const Address = ({ profile: { profile, creating }, createProfile }) => {
	const [address, setAddress] = useState('')

	const handleChange = (event) => {
		setAddress(event.target.value)
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		createProfile(address, profile ? true : false)
		setAddress('')
	}

	return (
		<div>
			<FormContainer>
				<form onSubmit={handleSubmit}>
					<Container>
						<FormInput
							type="text"
							name="address"
							value={address}
							onChange={handleChange}
							placeholder="Address"
						/>

						<Button type="submit">
							{!creating && <h3> Add </h3>}
							<span> {creating && <ButtonSpin />} </span>{' '}
						</Button>
					</Container>
				</form>
			</FormContainer>
		</div>
	)
}

Address.propTypes = {
	profile: PropTypes.object.isRequired,
	createProfile: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
	profile: state.profile,
})

export default connect(mapStateToProps, { createProfile })(Address)
