import React, { useState, useEffect, Fragment } from 'react'

import { addCategory, getCategories, deleteCategory } from '../../Redux/Category/category.actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ButtonSpin from '../ButtonSpin/ButtonSpin'
import CustomButton from '../custom-button/custom-button'
import Spinner from '../Spinner/Spinner';

import {
	Main,
	Container,
	FormInput,
	FormLabel,
	CategoriesDetails,
	CategoriesList,
	Ed,
	SubCat,
	Name,
	Remove,
} from './Categories.styles'


const Categories = ({
	addCategory,
	getCategories,
  deleteCategory,
	category: { adding, categories, },
}) => {
	useEffect(() => {
		getCategories()
	}, [getCategories])

	
	
	const [categoryName, setCategoryName] = useState({
		name: '',
	})

	const { name } = categoryName

	const handleSubmit = async (event) => {
		event.preventDefault()
		setCategoryName({ name: '' })
		addCategory(name)
	}

	const handleChange = (event) => {
		const { name, value } = event.target

		setCategoryName({ ...categoryName, [name]: value })
	}

	return (
		<Fragment>
			<Main>
				<form onSubmit={handleSubmit}>
					<Container>
						<FormLabel>
							{' '}
							Category Name
							<FormInput type="text" name="name" value={name} onChange={handleChange} required />
						</FormLabel>
						<CustomButton type="submit">
							{!adding && <span>Create </span>}
							{adding && <ButtonSpin />}
						</CustomButton>
					</Container>
				</form>


				<CategoriesDetails>
					<h2> All Categories</h2>
					
					{ categories.length > 0   ? (categories.map(category => (
						<CategoriesList key={category._id} categoryID={category._id}>
					     
							 <Name>
							{category.name}
							</Name>

              <SubCat>

							<a href={`admin/editcategory/${category._id}`}> <Ed /> </a>
							<Remove onClick={() => deleteCategory(category._id)} />

						
							</SubCat>

						</CategoriesList>
					))) : (<Spinner />)}





				</CategoriesDetails>
			</Main>
		</Fragment>
	)
}

Categories.propTypes = {
	addCategory: PropTypes.func.isRequired,
	category: PropTypes.object.isRequired,
	getCategories: PropTypes.func.isRequired,
	deleteCategory: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	category: state.category,
})

export default connect(mapStateToProps, { addCategory, getCategories, deleteCategory })(Categories)
