import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import useWindowSize from "../../hooks/useWindowSize";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../store/Products";
import { loadCategories } from "../../store/Categories";

function Products() {
	const dispatch = useDispatch();

	console.log("products");
	console.log(useWindowSize());

	useEffect(() => {
		dispatch(loadProducts());
		dispatch(loadCategories());
	}, [dispatch]);

	const products = useSelector((state) => {
		return state.products.products;
	});

	const categories = useSelector((state) => {
		return state.categories.categories;
	});

	let [selectedCategory, setSelectedCategory] = useState("All");
	const handleCategoryChange = (event) => {
		setSelectedCategory(event.target.value);
	};

	const filteredProducts =
		selectedCategory === "All"
			? products
			: products.filter((product) => product.category === selectedCategory);

	return (
		<div>
			<div>
				<h3>Filter by category:</h3>
				<select
					id="category"
					value={selectedCategory}
					onChange={handleCategoryChange}
				>
					<option value="All">All</option>
					{categories.map((category) => {
						return <option value={category}>{category}</option>;
					})}
				</select>
			</div>
			{filteredProducts.map((item, index) => (
				<ProductCard key={index} product={item} />
			))}
		</div>
	);
}

export default Products;
