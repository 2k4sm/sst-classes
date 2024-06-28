import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./Cart";
import { categoriesReducer } from "./Categories";
import { productsReducer } from "./Products";

const reducer = combineReducers({
	cart: cartReducer,
	products: productsReducer,
	categories: categoriesReducer,
});
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
