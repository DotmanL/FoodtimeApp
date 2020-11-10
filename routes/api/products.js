const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const auth = require('../../middleware/auth');

const cloudinary = require('../../config/cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Foodtime',
    allowedFormats: ['jpg', 'png'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }],
  },
});

const parser = multer({ storage: storage });

const {
  addProducts,
  getProducts,
  getProductsById,
  editProducts,
  deleteProducts,
  searchProducts,
  listRelated,
  listByCategory,
  getProductImage,
  findBySearch,
} = require('../../controllers/products');
const { isVendor } = require('../../controllers/auth');

router.post(
  '/',
  // [
  //   check('productName', 'productName is required').not().isEmpty(),
  //   check('description', 'Description is required').not().isEmpty(),
  //   check('price', 'price is required').not().isEmpty(),
  //   check('quantity', 'quantity is required').not().isEmpty(),

  // ],

  auth,
  parser.array('image', 6),
  isVendor,
  addProducts
);

router.get('/', getProducts);

router.get('/product/by/:productid', getProductsById);
router.put('/:productid', auth, isVendor, editProducts);
router.delete('/:productid', auth, isVendor, deleteProducts);
router.get('/search', searchProducts);
router.get('/products/related/:productid', listRelated);
router.get('/products/categories', listByCategory);
router.get('/product/image/:productid', getProductImage);

router.post('/products/by/search', findBySearch);

module.exports = router;
