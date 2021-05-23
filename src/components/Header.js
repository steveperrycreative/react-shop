import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <h1 className="text-2xl font-bold text-blue-600 mb-8">{this.props.title}</h1>
        );
    }
}

export default Header;