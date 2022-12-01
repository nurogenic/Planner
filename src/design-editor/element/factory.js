import React from 'react'
import Registry from './registry'

function create(element, observer, addReference) {
    let View = Registry.getElementView(element);
    let model = new (Registry.getElementModel(element))(element)
    return <View model={model} setReference={addReference} observer={observer} />
}

export default { create }