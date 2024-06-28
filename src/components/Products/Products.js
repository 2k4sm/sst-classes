import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import useWindowSize from "../../hooks/useWindowSize";

function Products() {
	let [products, setProducts] = useState([]);
	let [selectedCategory, setSelectedCategory] = useState("All");

	console.log("products");
	console.log(useWindowSize());

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((res) => {
				console.log(res);
				setProducts(res);
			});
	}, []);

	const handleCategoryChange = (event) => {
		setSelectedCategory(event.target.value);
	};

	const filteredProducts = selectedCategory === "All"
		? products
		: products.filter((product) => product.category === selectedCategory);

	return (
		<div>
			<div>
				<h3>Filter by category:</h3>
				<select id="category" value={selectedCategory} onChange={handleCategoryChange}>
					<option value="All">All</option>
					<option value="electronics">electronics</option>
					<option value="jewelery">jewelery</option>
					<option value="men's clothing">men's clothing</option>
					<option value="women's clothing">women's clothing</option>
				</select>
			</div>
			{filteredProducts.map((item, index) => (
				<ProductCard key={index} product={item} />
			))}
		</div>
	);
}

export default Products;
