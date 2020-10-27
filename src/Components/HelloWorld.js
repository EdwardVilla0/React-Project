import React from 'react';

class HelloWorld extends React.Component {
    render() {
        return (
            <h1>hello {this.props.name}</h1>
        )
    }
}

export default HelloWorld;