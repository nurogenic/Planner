import data from './data'
import React from 'react'
import {ElementFactory, ElementEditor} from './element'
import {LayoutBaseModel} from './layout/base'
import references from './references'

let id = 0;
function getUid(prefix) {
    id++
    return prefix ? `${prefix}_${id}` : `uid_${id}`
}

class DesignEditorModel {
    constructor(observer){
        this.observer = observer
        this.data = {
            elements: [],
            layout: null
        }
    }

    load() {
        return new Promise((res, rej) =>{
            setTimeout(() => {
                references.clear()
                this.data.elements = Object.values(data.elements).map( element => ElementFactory.create(element, this.observer))
                const layoutReference = React.createRef()
                this.data.layout = new LayoutBaseModel({
                    $reference: layoutReference,
                })
                this.data.layout.setChildren([data.elements.text, data.elements.image].map(element => {
                    element.$reference = React.createRef()
                    element.$parent = this.data.layout
                    const elementView = ElementFactory.create(element, this.observer, true)
                    references.set(elementView.props.model, element.$reference)
                    return (
                        <ElementEditor key={getUid('elem')}>
                          {elementView}  
                        </ElementEditor>
                    )
                }))
                references.set(this.data.layout, layoutReference)
                res(data)
            }, 1000)
        });
    }

    getElements() {
        return this.data.elements
    }

    getLayout() {
        return this.data.layout
    }
}

export default DesignEditorModel