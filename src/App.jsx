import "./App.css";
import ProductCard from "./components/ProductCard.jsx";

function App() {
	const products = [
		{
			name: "Design Notebook",
			price: "500",
			imageUrl:
				"https://i.pinimg.com/564x/f1/03/83/f10383a93c5a8a77563f230ab86e2e70.jpg",
		},
		{
			name: "Notebook Pin",
			price: "200",
			imageUrl:
				"https://i.pinimg.com/236x/9b/85/74/9b8574cbce70b903df0b82b9a059cf6c.jpg",
		},
		{
			name: "Computer",
			price: "20000",
			imageUrl:
				"https://i.pinimg.com/236x/a5/ca/c3/a5cac31b79975acb8e6b100412262b23.jpg",
		},
	];

	return (
		<div>
			{products.map((product) => (
				<ProductCard key={product.id} {...product} />
			))}
		</div>
	);
}

export default App;
