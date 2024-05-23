import React from "react";
import "../styles/ProductCard.css";
import PropTypes from "prop-types";

class ProductCard extends React.Component {
	//name (string), price (number), imageUrl (string)
	//use default values for this properties
	static propTypes = {
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		imageUrl: PropTypes.string.isRequired,
	};

	static defaultProps = {
		name: "Bathroom",
		price: 100,
		imageUrl:
			"https://i.pinimg.com/564x/5e/73/82/5e7382c5b9859040e2641fdb9f3f11ce.jpg",
	};

	render() {
		const name = this.props.name;
		const price = this.props.price;
		const imageUrl = this.props.imageUrl;

		return (
			<div className="productCard">
				<img src={imageUrl} alt={name} />
				<h3>{name}</h3>
				<p>${price.toFixed(2)}</p>
			</div>
		);
	}
}

export default ProductCard;
