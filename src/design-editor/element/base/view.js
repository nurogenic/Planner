import React, { Component } from 'react'

class ElementBaseView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div ref={this.props.model.getReference() || null}>
                <h1>{this.props.model.getLabel()}</h1>
            </div>
        )
    }
}

export default ElementBaseView