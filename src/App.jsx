import "./App.css";
import ProductCard from "./components/ProductCard.jsx";
import { products } from "./data/products.js";

function App() {
	return (
		<div>
			{products.map((product) => (
				<ProductCard key={product.id} {...product} />
			))}
		</div>
	);
}

export default App;
