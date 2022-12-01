import React from 'react'
import { ElementBaseView } from 'design-editor/element/base/index'

class ElementTextView extends ElementBaseView {
    render() {
        return (
            <div ref={this.props.model.getReference() || null}>
                <h2>{this.props.model.getLabel()}</h2>
            </div>
        )
    }
}

export default ElementTextView