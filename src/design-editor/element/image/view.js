import React from 'react'
import { ElementBaseView } from 'design-editor/element/base/index'

let style = { maxWidth: '100px', display: 'block'}

let src = 'https://img.purch.com/h/1000/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5Ni8yODEvb3JpZ2luYWwvd2hpdGUtdHJlZS1mcm9nLmpwZw==';

class ElementImageView extends ElementBaseView {
    render() {
        return <img ref={this.props.model.getReference() || null} src={src} alt={this.props.model.getLabel()} style={style} />
    }
}

export default ElementImageView