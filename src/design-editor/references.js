let referenceModel = [];
let referenceElements = [];

function set(model, element) {
    referenceModel.push(model)
    referenceElements[referenceModel.indexOf(model)] = element
    return this;
}

function getModel(element) {
    return referenceModel[referenceElements.indexOf(element)]
}

function getModelFromPoint(x, y, ignore=[]) {
    const domElements = document.elementsFromPoint(x,y).filter(domEl=>{
        return !~ignore.indexOf(domEl)
    })

    return getModel(
        referenceElements.filter(refElem => {
            return ~domElements.indexOf(refElem.current)
        }).shift()
    )
}

function getElement(model) {
    return referenceElements[referenceModel.indexOf(model)]
}

function _removeAtIndex(index) {
    if(~index){
        referenceElements.splice(index, 1)
        referenceModel.splice(index, 1)
    }
}

function removeModel(element) {
    _removeAtIndex(referenceElements.indexOf(element))
    return this
}

function removeElement(model) {
    _removeAtIndex(referenceModel.indexOf(model))
    return this;
}

function clear() {
    referenceElements = []
    referenceModel = []
}

export default {
    set,
    getModel,
    getModelFromPoint,
    getElement,
    removeModel,
    removeElement,
    clear
}