import React, { Component } from 'react'

class ElementList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let items = this.props.elements.map((element, index) => {
            return <li key={index}>{element}</li>
        })
        return <ul>{items}</ul>
    }
}

export default ElementList