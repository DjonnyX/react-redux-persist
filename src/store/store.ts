import { createStore, applyMiddleware } from "redux";
import { persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import { rootReducer } from "./root";
import thunk from "redux-thunk";

const persistConfig = {
	key: "root",
	storage: localStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const getState = () => {
	return store.getState();
};
