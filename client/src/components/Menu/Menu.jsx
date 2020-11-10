import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProducts } from '../../Redux/Products/products.actions'
import { Header } from './Menu.styles'
import Search from '../Search/Search'
import Spinner from '../Spinner/Spinner'
import MenuItem from './MenuItem'
import { Container, Items, Title } from './Menu.styles'

const Menu = ({ getProducts, product: { products } }) => {
	useEffect(() => {
		getProducts()
	}, [getProducts])

	return (
		<Container>
			<Header>
				<Title> Menu </Title>
			</Header>
			<Search />
			<Items>
				{products.length > 0 ? (
					products.map((product) => <MenuItem key={product._id} product={product}></MenuItem>)
				) : (
					<Spinner />
				)}
			</Items>
		</Container>
	)
}

Menu.propTypes = {
	product: PropTypes.object.isRequired,
	getProducts: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	product: state.product,
})

export default connect(mapStateToProps, { getProducts })(Menu)