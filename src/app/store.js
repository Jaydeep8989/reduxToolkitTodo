import {configureStore} from '@reduxjs/toolkit';

import todoReducer from '../features/todo/todoSlice';

// configurrStire import from the redux not from react redux
// configureStore only except the object
export const store = configureStore({
    reducer: todoReducer
})