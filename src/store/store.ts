import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage: localStorage
};

const persistedReducer = persistReducer(persistConfig, undefined);

export const store = createStore(
	persistedReducer
);

export const getState = () => {
	return store.getState();
};
