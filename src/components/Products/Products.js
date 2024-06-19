import ProductCard from "../ProductCard/ProductCard";
import Effect from "../Effect/Effect";
// import { useEffect, useState } from "react";
function Products() {
  console.log("Products")
  const products = [
    {
      id: 1,
      title: "Apple iPhone 14",
      price: "Rs. 1,00,000"
    },
    {
      id: 2,
      title: "Apple iPhone 13",
      price: "Rs. 70,000"
    },
    {
      id: 3,
      title: "Google Pixel 7",
      price: "Rs. 50,000"
    },
    {
      id: 4,
      title: "Nokia 1100",
      price: "Rs. 2,000"
    },
    {
      id: 5,
      title: "Samsung Galaxy S10",
      price: "Rs. 1,00,000"
    },
    {
      id: 6,
      title: "Sony Xperia S10",
      price: "Rs. 1,00,000"
    }
  ];

  // let [products, setProducts] = useState([])
  // useEffect(function () {
  //   fetch("https://fakestoreapi.com/products").then(
  //     (response) => {
  //       return response.json()
  //     }
  //   ).then(
  //     (result) => {
  //       console.log(result)
  //       setProducts(result)
  //     }
  //   )

  // }, [])



  return (
    <div>
      <div><Effect /></div>
      {
        products.map(function (item) {
          return (
            <ProductCard title={item.title} price={item.price} key={item.id} />
          )
        })
      }
    </div>
  )
}
export let a = 10;
export let b = 20;
export default Products;