import React from 'react';
import Header from './Header';
import Product from "./Product";
import Cart from "./Cart";
import sampleProducts from '../sampleProducts';

class App extends React.Component {
    state = {
        products: {},
        order: {},
    };

    componentDidMount() {
        this.setState({ products: sampleProducts });
    };

    addToOrder = key => {
        // 1. take copy of state (don't mutate state, always work on a copy)
        const order = { ...this.state.order };
        // 2. add to order or update number in order
        order[key] = order[key] + 1 || 1;
        // 3. update state
        this.setState({ order });
    }

    removeFromOrder = key => {
        // 1. take copy of state (don't mutate state, always work on a copy)
        const order = { ...this.state.order };
        // 2. remove item from order
        delete order[key];
        // 3. update state
        this.setState({ order });
    }

    render() {
        return (
            <div className="container mx-auto p-8">
                <Header title="My Amazing React Shop!" />
                <div className="flex space-x-5">
                    <div className="grid grid-cols-3 gap-5">
                        {Object.keys(this.state.products).map(key => (
                            <Product index={key} key={key} details={this.state.products[key]} addToOrder={this.addToOrder} />
                        ))}
                    </div>
                    <Cart products={this.state.products} order={this.state.order} removeFromOrder={this.removeFromOrder} />
                </div>
            </div>
        );
    };
}

export default App;
