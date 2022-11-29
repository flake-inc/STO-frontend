import { configureStore } from '@reduxjs/toolkit'
import { dateSlice } from './date';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistDateConfig = {
    key: 'date',
    storage,
}

const persistedDateReducer = persistReducer(persistDateConfig, dateSlice.reducer)

const store = configureStore({
    reducer: {
        date: persistedDateReducer,
    }
})

export default store;
