export function loadCategories() {
	return (dispatch) =>
		fetch("https://fakestoreapi.com/products/categories")
			.then((response) => response.json())
			.then((res) => {
				console.log(res);
				dispatch({ type: "LOAD_CATEGORIES_DONE", payload: res });
			});
}

export function categoriesReducer(
	state = {
		categories: [],
	},
	action,
) {
	switch (action.type) {
		case "LOAD_CATEGORIES_DONE": {
			return {
				...state,
				categories: action.payload,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
}
