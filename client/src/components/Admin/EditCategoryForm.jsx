import React, { Fragment, useState } from 'react'
import { editCategory } from '../../Redux/Category/category.actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ButtonSpin from '../ButtonSpin/ButtonSpin'
import CustomButton from '../custom-button/custom-button'
import styled from 'styled-components'

import { FormInput, FormLabel } from './Categories.styles'

const Main = styled.div`
	display: flex;
	width: 80vw;
	height: 79vh;
	padding: 15px 15px 15px 35px;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
		
	}
`

const Container = styled.div`
	width: 40vw;
	display: flex;
	flex-direction: column;
	background-color: black;
	padding: 15px 15px 15px 15px;
	box-shadow: 5px 5px #ffff;
	justify-content: center;
	align-items: center;
	height: 30vh;
	@media screen and (max-width: 800px) {
		width: 80vw;
    height: 40vh;
	}
`

const EditCategoryForm = ({ categoryID, editCategory, category: { adding } }) => {



  const [name, setName] = useState('')

	const handleSubmit = async (event) => {
		event.preventDefault()
		await editCategory(categoryID, name)
		setName('')
	}

	const handleChange = (event) => {
		setName(event.target.value)
	}

	return (
		<Fragment>
			<Main>
				<form onSubmit={handleSubmit}>
					<Container>
						<FormLabel>
							{' '}
							Edit Category
							<FormInput type="text" name="name" value={name} onChange={handleChange} required />
						</FormLabel>
						<CustomButton type="submit">
							{!adding && <span>Edit </span>}
							{adding && <ButtonSpin />}
						</CustomButton>
					</Container>
				</form>
			</Main>
		</Fragment>
	)
}

EditCategoryForm.propTypes = {
	editCategory: PropTypes.func.isRequired,
	category: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
	category: state.category,
})

export default connect(mapStateToProps, { editCategory })(EditCategoryForm)
