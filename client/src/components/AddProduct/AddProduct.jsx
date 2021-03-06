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
  PreviewLabel,
  ImagePreviewButtons,
  CategorySelect,
  ImageUpload,
  AddMore,
  PostPrev,
  Gal,
  Add,
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

  const [image, setImage] = useState({ preview: '', raw: '' });
  const [productDetails, setProductDetails] = useState(initialState);
  const [showUpload, setShowUpload] = useState(true);
  const [addMore, setAddMore] = useState(false);

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

      const mapped = imageArray.map((file) => ({
        ...file,
        preview: URL.createObjectURL(file),
      }));

      setShowUpload(false);
      setAddMore(true);

      console.log(image.preview, 'on ADDs');

      setImage({
        preview: mapped,
        raw: imageArray,
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
    setAddMore(false);
    setShowUpload(true);
    // return <Redirect to="/menu" />;
  };

  const hiddenFileInput = React.useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const onAdd = (event) => {
    if (event.target.files.length) {
      const imageArray = Array.from(event.target.files);

      const mapNewImages = imageArray.map((file) => ({
        ...file,
        preview: URL.createObjectURL(file),
      }));

      image.preview.push(...mapNewImages);
      image.raw.push(...imageArray);

      setImage({
        preview: image.preview,
        raw: image.raw,
      });
    }
  };

  const onRemove = (event) => {
    const currentImagePreview = image.preview.filter(
      (previewUrl, i) => i !== event
    );

    const imageRemove = image.raw.filter((imagesSelected, i) => i !== event);

    setImage({
      preview: currentImagePreview,
      raw: imageRemove,
    });

    if (image.preview.length === 1) {
      setAddMore(false);
      setShowUpload(true);
    }
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
              <ImagePreviewContainer>
                {image.preview &&
                  image.preview.map((file, i) => (
                    <div key={i}>
                      <ImagePreview src={file.preview} />
                      <ImagePreviewButtons
                        title="Remove"
                        onClick={() => onRemove(i)}
                      >
                        <h3>Remove</h3>
                        <Remove />
                      </ImagePreviewButtons>
                    </div>
                  ))}
                {showUpload && (
                  <>
                    <PreviewLabel htmlFor="upload" multiple>
                      <h3 style={{ color: '#eb392e' }}>
                        Maximum of 6 pictures
                      </h3>
                      <Gal />
                    </PreviewLabel>
                  </>
                )}
                {addMore && (
                  <AddMore>
                    <input
                      type="file"
                      name="image"
                      id="upload"
                      multiple
                      ref={hiddenFileInput}
                      onChange={onAdd}
                      style={{ display: 'none' }}
                    />

                    <Add onClick={handleClick} />
                    <h3>Add More Images</h3>
                  </AddMore>
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
            <ButtonContainer>
              <CustomButton type="submit">
                {!creating && <span>Create Product</span>}
                {creating && <ButtonSpin />}
              </CustomButton>
            </ButtonContainer>
          </ImageUploadContainer>
        </Main>
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

//   <input
//   type="file"
//   name="image"
//   id="upload"
//   ref={hiddenFileInput}
//   onChange={(event) => onUpdate(event, i)}
//   style={{ display: 'none' }}
// />
// <h3 onClick={handleClick}>Update</h3>
// const imageIndex = (event, i) => {
//   const newImagePreview = image.preview.filter((previewUrl, i) => !i);
//   console.log(newImagePreview, 'currr');

//   return image.preview.indexOf(newImagePreview);
// };

// const onUpdate = (event, i) => {
//   const fileUploaded = event.target.files[0];
//   image.preview.splice(image.preview.findIndex(imageIndex), 1, {
//     preview: URL.createObjectURL(fileUploaded),
//   });
// };
