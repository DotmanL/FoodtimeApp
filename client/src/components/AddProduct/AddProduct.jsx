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
  ImagePreviewContainer,
  ImagePreview,
  ImagePreviewButtons,
  CategorySelect,
  ImageUpload,
  PostPrev,
  Gal,
  Remove,
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
  product: { creating },
}) => {
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const [image, setImage] = useState({ preview: '', images: [], raw: '' });
  const [productDetails, setProductDetails] = useState(initialState);

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
      const imageArray = Array.from(event.target.files);

      setImage({
        images: imageArray,
      });

      const mapped = imageArray.map((file) => ({
        ...file,
        preview: URL.createObjectURL(file),
      }));

      setImage({
        preview: mapped,
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
    data.set('price', productDetails.price);
    data.set('quantity', productDetails.quantity);
    data.set('category', productDetails.category);

    createProduct(data);
    setProductDetails(initialState);
    setImage('');

    // return <Redirect to="/menu" />;
  };

  const onRemove = (event) => {
    const currentImagePreview = image.preview.filter(
      (previewUrl, i) => i !== event
    );
    setImage({
      preview: currentImagePreview,
    });
  };

  const onUpdate = (event, i) => {};

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
              <ImagePreviewContainer>
                {image.preview ? (
                  image.preview.map((file, i) => (
                    <div key={i}>
                      <ImagePreview src={file.preview} />
                      <ImagePreviewButtons>
                        <h3 onClick={() => onUpdate(i)}>update </h3>
                        <Remove title="Remove" onClick={() => onRemove(i)} />
                      </ImagePreviewButtons>
                    </div>
                  ))
                ) : (
                  <>
                    <label htmlFor="upload">
                      <Gal />
                    </label>
                  </>
                )}
              </ImagePreviewContainer>
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
            {!creating && <span>Create Product</span>}
            {creating && <ButtonSpin />}
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
