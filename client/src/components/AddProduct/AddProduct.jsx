import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createProduct } from '../../Redux/Products/products.actions';
import { getCategories } from '../../Redux/Category/category.actions';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button';
// import { Redirect } from 'react-router-dom';
import {
  Container,
  Form,
  FormInput,
  FormContainer,
  Main,
  ImageUploadContainer,
  ImagePreview,
  CategorySelect,
  ImageUpload,
  PostPrev,
  Gal,
  ButtonContainer,
} from './AddProduct.styles';
import ButtonSpin from '../ButtonSpin/ButtonSpin';

const initialState = {
  productName: '',
  description: '',
  price: '',
  quantity: '',
  category: '',
};

const AddProduct = ({
  createProduct,
  getCategories,
  category: { categories },
  product: { adding },
}) => {
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const [image, setImage] = useState({ preview: '', raw: '' });
  const [productDetails, setProductDetails] = useState(initialState);

  // data = productImage;

  const {
    productName,
    description,
    price,
    quantity,
    category,
  } = productDetails;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleImage = (event) => {
    if (event.target.files.length) {
      setImage({
        preview: URL.createObjectURL(event.target.files[0]),
        raw: event.target.files,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    for (let i = 0; i < image.raw.length; i++) {
      data.append('image', image.raw[i]);
    }
    data.set('productName', productDetails.productName);
    data.set('description', productDetails.description);
    data.set('price', productDetails.quantity);
    data.set('quantity', productDetails.quantity);
    data.set('category', productDetails.category);

    createProduct(data);
    setProductDetails(initialState);
    setImage('');

    // return <Redirect to="/menu" />;
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Main>
          <FormContainer>
            <FormInput
              type="text"
              name="productName"
              value={productName}
              placeholder="Product Name"
              onChange={handleChange}
              required
            />
            <FormInput
              type="text"
              name="description"
              value={description}
              onChange={handleChange}
              placeholder="Product Description"
              required
            />
            <FormInput
              type="number"
              name="price"
              min="0"
              value={price}
              onChange={handleChange}
              placeholder="Product Price"
              required
            />
            <FormInput
              type="number"
              min="1"
              name="quantity"
              value={quantity}
              onChange={handleChange}
              placeholder="Quantity of Product"
              required
            />
            <CategorySelect
              id="category"
              name="category"
              value={category}
              onChange={handleChange}
            >
              <option value="" selected disabled hidden>
                Choose Category
              </option>
              {categories.map((category) => (
                <option value={category._id}>{category.name}</option>
              ))}
            </CategorySelect>
          </FormContainer>
          <ImageUploadContainer>
            <PostPrev>
              <label htmlFor="upload">
                {image.preview ? (
                  <ImagePreview alt="product image" src={image.preview} />
                ) : (
                  <>
                    <Gal />{' '}
                  </>
                )}
              </label>
            </PostPrev>
            <ImageUpload
              type="file"
              name="image"
              id="upload"
              multiple
              onChange={handleImage}
              style={{ display: 'none' }}
              required
            />
          </ImageUploadContainer>
        </Main>
        <ButtonContainer>
          <CustomButton type="submit">
            {!adding && <span>Create Product</span>}
            {adding && <ButtonSpin />}
          </CustomButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

AddProduct.propTypes = {
  createProduct: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  category: state.category,
  product: state.product,
});

export default connect(mapStateToProps, { createProduct, getCategories })(
  AddProduct
);
