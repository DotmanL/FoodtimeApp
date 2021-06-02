import React, { useEffect, Fragment, useState } from 'react';

import PropTypes from 'prop-types';

import { getProfileById } from '../../Redux/Profile/profile.actions';
import { connect } from 'react-redux';

import Spinner from '../Spinner/Spinner';

import {
  Container,
  Header,
  Top,
  ImageContainer,
  TopText,
  ImageDiv,
  ImgText,
  Content,
  MenuNav,
  MenuLinks,
  MenuContent,
  Links,
  AddProduct,
} from './Dashboard.styles';

import Account from './Account';
import Orders from './Orders';

const Dashboard = ({
  match,
  getProfileById,
  profile: { profile, loading },
  user: { user },
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  const items = {
    account: <Account />,
    order: <Orders />,
  };

  const [menus, setMenus] = useState('account');

  const ref = React.createRef();

  const handleClick = () =>
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Container>
          <Header />
          <Top>
            <div>
              {profile !== null && profile && profile.profileImage !== '' && (
                <ImageContainer src={profile && profile.profileImage} alt="" />
              )}
              {profile === null && (
                <ImageDiv>
                  <ImgText>
                    {user && user.lastName.charAt(0)}{' '}
                    {user && user.firstName.charAt(0)}
                  </ImgText>
                </ImageDiv>
              )}
              {profile !== null && profile && profile.profileImage === '' && (
                <ImageDiv>
                  <ImgText>
                    {user && user.lastName.charAt(0)}{' '}
                    {user && user.firstName.charAt(0)}
                  </ImgText>
                </ImageDiv>
              )}
            </div>
            <TopText>Hello, {user && user.firstName} </TopText>
            {user && user.role === 'vendor' ? (
              <AddProduct to="/dashboard/add-product">
                Add New Product
              </AddProduct>
            ) : null}
          </Top>

          <Content>
            <MenuNav>
              <MenuLinks onClick={handleClick}>
                <div ref={ref} />
                <Links onClick={() => setMenus('account')}>
                  Account Details
                </Links>
              </MenuLinks>
              <MenuLinks>
                <Links>Products</Links>
              </MenuLinks>
              <MenuLinks>
                <Links onClick={() => setMenus('order')}>Orders History</Links>
              </MenuLinks>
              <MenuLinks>
                <Links>Delivered Items</Links>
              </MenuLinks>
              <MenuLinks>
                <Links>Reviews</Links>
              </MenuLinks>
            </MenuNav>
            <MenuContent>{items[menus]}</MenuContent>
          </Content>
        </Container>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  user: state.user,
});

export default connect(mapStateToProps, { getProfileById })(Dashboard);
