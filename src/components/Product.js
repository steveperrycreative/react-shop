import React from 'react';

class Product extends React.Component {
    render() {
        const { title, desc, price } = this.props.details;

        return (
            <div className="space-y-3 border border-gray-300 p-5 rounded-md">
                <div className="overflow-hidden rounded-sm">
                    <img src="http://placeimg.com/640/500/any" alt=""/>
                </div>
                <h2 className="font-semibold">{title}</h2>
                <p className="text-sm">{desc}</p>
                <p className="text-red-600 font-bold">{this.props.formatPrice(price)}</p>
                <button
                    className="appearance-none bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-sm inline-block"
                    onClick={() => this.props.addToOrder(this.props.index)}
                >Add to Basket</button>
            </div>
        );
    }
}

export default Product;