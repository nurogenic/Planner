import React, { Component } from 'react'
import _ from 'lodash'
import Styles from './styles'
import ToolDrag from './tool/drag'

class ElementEditor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            styles: Styles.base
        }
    }

    getStyles() {
        return this.state.styles
    }

    setStyles(styles) {
        this.setState({styles: _.extend({}, this.state.styles, styles)})
        return this
    }

    onMouseOver(evt) {
        this.setState({ styles: Styles.hover})
        evt.stopPropagation()
        evt.preventDefault()
    }

    onMouseOut(evt) {
        this.setState({ styles: Styles.base})
        evt.stopPropagation()
        evt.preventDefault()
    }

    onMouseDown(evt) {
        this.$drag = new ToolDrag(this, evt)
        evt.stopPropagation()
        evt.preventDefault()
    }

    onMouseUp(evt) {
        this.$drag.destroy()
        delete this.$drag
        this.setState({ styles: Styles.hover})

        evt.stopPropagation()
        evt.preventDefault()
    }

    onMouseMove(evt) {
        this.$drag.move(evt)
        evt.stopPropagation()
        evt.preventDefault()
    }

    render() {
        return (
            <div
                style={this.getStyles()}
                onMouseOver={this.onMouseOver.bind(this)}
                onMouseOut={this.onMouseOut.bind(this)}
                onMouseDown={this.onMouseDown.bind(this)}
            >{this.props.children}</div>
        )
    }
}

export default ElementEditor