import React from 'react';

class Cart extends React.Component {

    renderOrder = key => {
        const product = this.props.products[key];
        const count = this.props.order[key];

        if ( ! product) return null;

        return (
            <div key={key} className="flex justify-between items-center py-3">
                <div className="flex items-center space-x-3 text-xs">
                    <img src="http://placeimg.com/50/50/any" alt={product.title}/>
                    <div>
                        <p className="font-semibold">{product.title}</p>
                        <p>{this.props.formatPrice(product.price)}</p>
                        <div className="flex space-x-3 items-center">
                            <p>Qty <span className="font-semibold">{count}</span></p>
                            <div className="flex space-x-1">
                                <button onClick={() => this.props.removeOneFromOrder(key)}>
                                    <svg className="fill-current w-3 h-3" viewBox="0 0 448 512"><path d="M448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-268 60v116h-70.9c-10.7 0-16.1 13-8.5 20.5l114.9 114.3c4.7 4.7 12.2 4.7 16.9 0l114.9-114.3c7.6-7.6 2.2-20.5-8.5-20.5H268V140c0-6.6-5.4-12-12-12h-64c-6.6 0-12 5.4-12 12z"></path></svg>
                                </button>
                                <button onClick={() => this.props.addToOrder(key)}>
                                    <svg className="fill-current w-3 h-3" viewBox="0 0 448 512"><path d="M0 432V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm268-60V256h70.9c10.7 0 16.1-13 8.5-20.5L232.5 121.2c-4.7-4.7-12.2-4.7-16.9 0l-115 114.3C93 243 98.4 256 109.1 256H180v116c0 6.6 5.4 12 12 12h64c6.6 0 12-5.4 12-12z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="text-xs bg-red-500 px-2 py-1 rounded-full text-white"
                    onClick={() => this.props.removeFromOrder(key)}
                >X</button>
            </div>
        );
    };

    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const product = this.props.products[key];
            const count = this.props.order[key];
            return prevTotal + count * product.price;
        }, 0);
        const numberOfItems = orderIds.reduce((prevTotal, key) => {
            return prevTotal +this.props.order[key];
        }, 0);

        return (
            <div className="border border-gray-300 p-5 rounded-md w-full">
                <div className="pb-3 border-b border-gray-300 mb-2.5">
                    <h3 className="text-lg font-bold flex justify-between">Shopping Basket</h3>
                </div>
                {orderIds.map(this.renderOrder)}
                <div className="pt-3 border-t border-gray-300 mt-2.5 flex justify-between">
                    <span>{numberOfItems} item{numberOfItems === 1 ? '' : 's'}</span>
                    <span className="font-bold">Total: {this.props.formatPrice(total)}</span>
                </div>
            </div>
        );
    };
}

export default Cart;