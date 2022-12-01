import React, { Component } from 'react'
import {ElementList} from './element'
import {LayoutBaseView} from './layout/base'
import references from './references'

class DesignEditorView extends Component {
    constructor(props) {
        super(props)
        this.state = {loading: true}

        this.$loading = true
        this.getModel().load().then(
            (data) => {
                this.setState({loading: false})
            },
            (data) => {
                this.setState({loading: false})
            },
        )
    }

    getModel() {
        return this.props.model
    }

    isLoading() {
        return this.state.loading
    }

    getClassNames() {
        return this.isLoading() ? ['loading'] : []
    }

    render() {
        if(this.isLoading()){
            return <div>Loading...</div>
        }

        return (
             <div>
                 <ElementList elements={this.getModel().getElements()} />
                 <LayoutBaseView model={this.getModel().getLayout()} />
             </div>
        )
    }
}

export default DesignEditorView