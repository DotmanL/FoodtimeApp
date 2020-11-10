import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './User/user.reducer';
import profileReducer from './Profile/profile.reducer';
import categoryReducer from './Category/category.reducer';
import productReducer from './Products/products.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['product'],
};

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  category: categoryReducer,
  product: productReducer,
});

export default persistReducer(persistConfig, rootReducer);
