import React, { Fragment, useEffect, Suspense } from 'react';

import { GlobalStyle } from './global.styles';
import { loadUser } from './Redux/User/user.actions';
import setAuthToken from './utils/setAuthToken';
import { store } from './Redux/store';

import { Switch, Route } from 'react-router-dom';
import Spinner from './components/Spinner/Spinner';
import ErrorBoundary from './components/error-boundary/error-boundary';
import Nav from './components/Navbar/Nav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';

import HomePage from './Pages/HomePage/Homepage';
import MenuPage from './Pages/MenuPage/MenuPage';
import MenuList from './components/Menu/MenuList';
import SignUpRestaurant from './components/SignUp/SignUpRestaurant';
import SignUpCustomer from './components/SignUp/SignUpCustomer';
import ConfirmationPage from './Pages/Confirmation Page/ConfirmationPage';
import Footer from './components/Footer/Footer';
import SignIn from './components/SignIn/SignIn';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/Routes/PrivateRoute';
import AdminRoute from './components/Routes/AdminRoute';
import Reset from './Pages/ResetPassword/Reset';
import Forgot from './Pages/Forgot/Forgot';
import Admin from './components/Admin/Admin';
import accessdenied from './components/error-boundary/accessdenied';
import EditCategory from './components/Admin/EditCategory';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
import AddProduct from './components/AddProduct/AddProduct';
import SearchResult from './components/SearchResult/SearchResult';

const styles = {
  marginTop: '80px',
};

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <ToastContainer style={styles} closeOnClick transition={Zoom} />
      <Nav />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/signup/restaurant"
              component={SignUpRestaurant}
            />
            <PrivateRoute exact path="/profile/:id" component={Dashboard} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup/customer" component={SignUpCustomer} />
            <Route
              exact
              path="/verifyaccount/:token"
              component={ConfirmationPage}
            />
            <Route exact path="/resetpassword/:token" component={Reset} />
            <Route exact path="/forgotpassword" component={Forgot} />
            <Route exact path="/accessdenied" component={accessdenied} />
            <Route exact path="/menu" component={MenuPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/products/:id" component={MenuList} />
            <Route exact path="/dashboard/add-product" component={AddProduct} />
            <Route exact path="/search" component={SearchResult} />
            <AdminRoute exact path="/admin" component={Admin} />
            <AdminRoute
              exact
              path="/admin/editcategory/:id"
              component={EditCategory}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;
