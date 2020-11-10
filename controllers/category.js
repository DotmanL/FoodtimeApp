const Category = require('../models/Category')
//const User = require('../models/User');

exports.createCategory = async (req, res) => {
	try {
		const newCategory = new Category({
			name: req.body.name,
		})

		const category = await newCategory.save()

		res.json(category)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Something went wrong')
	}
}

exports.getCategory = async (req, res) => {
	try {
		const category = await Category.find()

		if (!category) {
			return res.status(404).json({ msg: 'No category found' })
		}

		res.json(category)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Something went wrong')
	}
}

exports.getCategoryById = async (req, res) => {
	try {
		const category = await Category.findById(req.params.id)

		if (!category) {
			return res.status(404).json({ msg: 'No categories found' })
		}

		res.json(category)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Something went wrong')
	}
}

exports.deleteCategory = async (req, res) => {
	try {
		const category = await Category.findById(req.params.id)

		await category.remove()

		res.json({ msg: 'Category Removed' })
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Something went wrong here')
	}
}

exports.editCategory = async (req, res) => {	
	try {
	const { name } = req.body
  //const category = await Category.findById(req.params.id)

	const categoryField = {
		name,
	}

	
		let category = await Category.findOneAndUpdate(
			{ _id: req.params.id },
			{ $set: categoryField },
			{ new: true, upsert: true }
		)
		res.json(category)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Something went wrong')
	}
}
