import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './reducers/menuReducer';
import logoReducer from './reducers/logoReducer';
import dateReducer from './reducers/dateReducer';
import userReducer from './reducers/userSlice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    logo: logoReducer,
    date: dateReducer,
    user: userReducer,
  },
});

export default store;
