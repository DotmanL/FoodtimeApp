const Products = require('../models/Products');
const User = require('../models/User');

const cloudinary = require('../config/cloudinary');
//const { validationResult } = require('express-validator')

exports.addProducts = async (req, res) => {
  // const errors = validationResult(req)
  // if (!errors.isEmpty()) {
  // 	res.status(400).json({ errors: errors.array() })
  // }

  try {
    const user = await User.findById(req.user.id).select('-password');

    // if (req.file) {
    //   const images = await cloudinary.uploader.upload(req.file.path);
    //   console.log('req.file :', req.file);
    //   console.log(images);
    //   console.log(images.url);

    req.body.productImage = [];
    for (const file of Object.keys(req.files)) {
      var fileObj = req.files[file];
      let result = await cloudinary.uploader.upload(fileObj.path);
      req.body.productImage.push(result.secure_url);
    }
    // console.log('req.file :', req.file);

    const newProducts = new Products({
      user: req.user.id,
      restaurant: user.restaurant,
      productName: req.body.productName,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
      category: req.body.category,
      productImage: req.body.productImage,
    });

    const products = await newProducts.save();

    res.json(products);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Something went wrong');
  }
};

exports.editProducts = async (req, res) => {
  const { productName, description, price, quantity, category } = req.body;

  const productFields = {
    user: req.user.id,
    productName,
    description,
    price,
    quantity,
    category,
  };

  try {
    let products = await Products.findOneAndUpdate(
      { _id: req.params.productid },
      { $set: productFields },
      { new: true, upsert: true }
    );
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something went wrong');
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Products.find()
      .sort({ date: -1 })
      .populate('category', 'name');

    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something went wrong');
  }
};

exports.getProductsById = async (req, res) => {
  try {
    const product = await Products.findById(req.params.productid).populate(
      'category'
    );

    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something went wrong');
  }
};

exports.deleteProducts = async (req, res) => {
  try {
    const product = await Products.findById(req.params.productid);

    if (!product) {
      return res.status(404).json({ msg: `Product doesn't exist` });
    }

    //Check user
    if (product.user.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ msg: `You don't have access to delete this` });
    }
    await product.remove();

    res.json({ msg: 'Product Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something went wrong');
  }
};

exports.searchProducts = async (req, res) => {
  const { search } = req.query;
  try {
    if (search) {
      const results = await Products.find({
        $or: [
          { productName: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
        ],
      }).populate('category');

      if (!results) {
        return res.status(404).json({ msg: `Product doesn't exist` });
      }
      res.json(results);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something went wrong');
  }
};

exports.listRelated = async (req, res) => {
  try {
    let limit = req.query.limit ? parseInt(req.query.limit) : 6;
    const products = await Products.findById(req.params.productid);

    req.products = products;

    //$ne selects the documents where the value of the field is not equal to the specified value.
    const results = await Products.find({
      _id: { $ne: req.products },
      category: req.products.category,
    })
      .limit(limit)
      .populate('category', '_id name');

    if (!results) {
      return res.status(404).json({ msg: `No related product` });
    }

    res.json(results);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something went wrong');
  }
};

exports.findBySearch = async (req, res) => {
  let order = req.body.order ? req.body.order : 'desc';
  let sortBy = req.body.sortBy ? req.body.sortBy : 'quantity';
  let limit = req.body.limit ? parseInt(req.body.limit) : 20;
  let skip = parseInt(req.body.skip);
  let findProducts = {};

  //  console.log(order, sortBy, limit, skip, req.body.filters);
  //    console.log("findProducts", findProducts);

  try {
    for (let key in req.body.filters) {
      if (req.body.filters[key].length > 0) {
        if (key === 'price') {
          //	$gte selects the documents where the value of the field is greater than or equal to (i.e. >=) a specified value (e.g. value.)
          //	$lte selects the documents where the value of the field is less than or equal to (i.e. <=) the specified value.
          findProducts[key] = {
            $gte: req.body.filters[key][0],
            $lte: req.body.filters[key][1],
          };
        } else {
          findProducts[key] = req.body.filters[key];
        }
      }
    }

    const results = await Products.find(findProducts)
      .populate('category')
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit);

    res.json({ size: results.length, results });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something went wrong');
  }
};

exports.listByCategory = async (req, res) => {
  try {
    const results = await Products.distinct('category', {});

    if (!results) {
      return res.status(404).json({ msg: `Categories not found` });
    }

    res.json(results);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something went wrong');
  }
};

exports.getProductImage = async (req, res) => {
  try {
    const products = await Products.findById(req.params.productid);

    req.products = products;

    const results = await Products.find({
      _id: { $eq: req.products },
      productImage: req.products.productImage,
    });

    if (!results) {
      return res.status(404).json({ msg: `Image not found` });
    }

    res.json(results);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something went wrong here now');
  }
};

//

exports.reduceItemQuantity = (req, res, next) => {
  let bulkOps = req.body.order.products.map((item) => {
    return {
      updateOne: {
        filter: { _id: item._id },
        update: { $inc: { quantity: -item.quantity, sold: +item.quantity } },
      },
    };
  });

  Products.bulkWrite(bulkOps, {}, (error, products) => {
    if (error) {
      return res.status(400).json({
        error: 'Could not update product',
      });
    }
    next();

    //console.log(products, "bulk write");
  });
};
