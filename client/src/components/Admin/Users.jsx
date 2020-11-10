import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import { getAllUsers, suspend, unsuspend } from '../../Redux/User/user.actions';
import { Table, Tr } from 'styled-table-component';
import { Container, Title, Button } from './Users.styles';
import FormInput from '../form-input/form-input';
import ButtonSpin from '../ButtonSpin/ButtonSpin';

const Users = ({
  getAllUsers,
  suspend,
  unsuspend,
  user: { users, loading },
}) => {
  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  //	console.log(users)

  const userDetails =
    users.length > 0 ? (
      users.map((user) => (
        <Tr active key={user._id}>
          <td>{user.role}</td>
          <td>{user.lastName}</td>
          <td>{user.firstName}</td>
          <td>{user.email}</td>
          <td>{user.phoneNumber}</td>
          <td>{user.restaurant}</td>
          <td>{user.city}</td>
          <td>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                user.suspended === 'false' && suspend(user._id);
                user.suspended === 'true' && unsuspend(user._id);
              }}
            >
              {user.suspended === 'false' && (
                <FormInput
                  type="hidden"
                  name="suspended"
                  value="true"
                  required
                />
              )}
              {user.suspended === 'true' && (
                <FormInput
                  type="hidden"
                  name="suspended"
                  value="false"
                  required
                />
              )}

              {user.suspended === 'false' ? (
                <Button type="submit">
                  {!loading && <span>Suspend</span>}
                  {loading && <ButtonSpin />}
                </Button>
              ) : (
                <Button type="submit">
                  {!loading && <span>Unsuspend</span>}
                  {loading && <ButtonSpin />}
                </Button>
              )}
            </form>
          </td>
        </Tr>
      ))
    ) : (
      <Spinner />
    );

  return (
    <Fragment>
      <Container>
        <Title>User's Details</Title>
        <Table hover striped responsiveSm responsiveMd responsiveXl>
          <thead>
            <Tr style={{ color: 'white', background: 'black' }} active>
              <th scope="col">User Role</th>
              <th scope="col">Last Name</th>
              <th scope="col">First Name</th>
              <th scope="col">Email Address</th>
              <th scope="col"> Phone Number</th>
              <th scope="col"> Restaurant Name</th>
              <th scope="col">City</th>
              <th scope="col">Suspend User</th>
            </Tr>
          </thead>
          <tbody>{userDetails}</tbody>
        </Table>
      </Container>
    </Fragment>
  );
};

Users.propTypes = {
  user: PropTypes.object.isRequired,
  getAllUsers: PropTypes.func.isRequired,
  suspend: PropTypes.func.isRequired,
  unsuspend: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getAllUsers, suspend, unsuspend })(
  Users
);
