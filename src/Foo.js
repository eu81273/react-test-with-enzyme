import React, { Component } from 'react';

export default class Foo extends Component {
    constructor (props) {
        super(props);

        this.state = { count: 0 };
        this.fooClick = (e) => this.setState({ count: ++this.state.count });
    }

    render () {
        const { count } = this.state;
        return (
            <div className="foo" onClick={this.fooClick}>{count}</div>
        );
    }
}
