import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { filterReducer } from "./contacts/filterSlice";
import { contactsReducer } from "./contacts/contactsSlice";
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
import { authReducer } from "./auth/slice";

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ]
        },
    }),
];

const authPersistConfig = {
    key: 'auth',
    storage,
    witelist: ['token'],
};

export const store = configureStore ({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
        filter: filterReducer,
    },
    middleware,
    devTools: process.env.Node_ENV === 'development',
});

export const persistor = persistStore(store);