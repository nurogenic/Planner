import {ElementBaseModel, ElementBaseView} from './base'
import {ElementTextModel, ElementTextView} from './text'
import {ElementImageModel, ElementImageView} from './image'

const Models = {text: ElementTextModel, image: ElementImageModel}
const Views = {text: ElementTextView, image: ElementImageView}

function getElementView(element) {
    if(Views.hasOwnProperty(element.$type)){
        return Views[element.$type] || ElementBaseView
    }

    return ElementBaseView;
}

function getElementModel(element) {
    if(Models.hasOwnProperty(element.$type)){
        return Models[element.$type] || ElementBaseModel
    }

    return ElementBaseModel;
}

export default {getElementModel, getElementView}