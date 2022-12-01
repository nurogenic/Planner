import React, { Component } from 'react'
import references from 'design-editor/references'

let style = {backgroundColor: '#F7F7F7', width: '1024px', minHeight: '400px' }

class LayoutBaseView extends Component {
    constructor(props) {
        super(props)        
    }

    getChildren() {
        return this.props.model.getChildren()
    }

    render() {
        return (
            <div
                style={style}
                ref={this.props.model.getReference() || null}
            >{this.getChildren()}</div>
        )
    }
}

export default LayoutBaseView