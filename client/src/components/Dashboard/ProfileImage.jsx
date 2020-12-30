import React, { useState } from 'react';

import {
  Container,
  FormContainer,
  FormInput,
  Gal,
  PostPrev,
  Button,
  Title,
} from './ProfileImage.styles';

import { connect } from 'react-redux';
import { addImage } from '../../Redux/Profile/profile.actions';
import PropTypes from 'prop-types';
import ButtonSpin from '../ButtonSpin/ButtonSpin';

const ProfileImage = ({ addImage, profile: { creating } }) => {
  const [image, setImage] = useState({ preview: '', raw: '' });

  const handleImage = (event) => {
    if (event.target.files.length) {
      setImage({
        preview: URL.createObjectURL(event.target.files[0]),
        raw: event.target.files[0],
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append('image', image.raw);
    addImage(data);
    setImage('');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <Title> Add profile image</Title>
          <PostPrev>
            <label htmlFor="upload">
              {image.preview ? (
                <img
                  alt="test"
                  src={image.preview}
                  style={{ width: '50%', marginLeft: '0px' }}
                />
              ) : (
                <>
                  <Gal />{' '}
                </>
              )}
            </label>
          </PostPrev>
          <FormInput
            type="file"
            name="image"
            id="upload"
            onChange={handleImage}
            style={{ display: 'none' }}
            required
          />
          <br />

          <Button type="submit">
            {' '}
            {!creating && 'Add'} <span> {creating && <ButtonSpin />} </span>
          </Button>
        </FormContainer>
      </form>
    </Container>
  );
};

ProfileImage.propTypes = {
  addImage: PropTypes.func.isRequired,

  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { addImage })(ProfileImage);
