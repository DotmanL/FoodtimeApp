import React, { Fragment, useEffect } from 'react'
import { getCategoryById } from '../../Redux/Category/category.actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import EditCategoryForm from './EditCategoryForm'
import { ArrowBackCircle } from '@styled-icons/ionicons-sharp/ArrowBackCircle'
import { Link } from 'react-router-dom'

const Container = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
	background-color: #457b9d;
	justify-content: center;
	align-items: center;
	height: auto;
	@media screen and (max-width: 800px) {
	}
`

const Back = styled(ArrowBackCircle)`
	width: 40px;
	height: 40px;
  color: white;
  
  :hover {
    color:  #eb392e;
  }
`

const BackNav = styled.div`
  display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 60px;
	margin-left: -47vw;
	@media screen and (max-width: 800px) {
	margin-top: 20px;
	}
`

const EditCategory = ({ match, getCategoryById, category: { categories, _id } }) => {
	useEffect(() => {
		getCategoryById(match.params.id)
	}, [getCategoryById, match.params.id])

	console.log(match.params.id);


	return (
		<Fragment>
			<Container>
				<Link to="/admin">
					{' '}
					<BackNav>
						{' '}
						<Back /> Back to Admin{' '}
					</BackNav>{' '}
				</Link>
				<EditCategoryForm categoryID={categories._id} />
			</Container>
		</Fragment>
	)
}

EditCategory.propTypes = {
	getCategoryById: PropTypes.func.isRequired,
	category: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
	category: state.category,
})

export default connect(mapStateToProps, { getCategoryById })(EditCategory)
