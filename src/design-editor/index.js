import React from 'react'
import ReactDOM from 'react-dom'
import DesignEditorView from './view'
import DesignEditorModel from './model'
import DesignEditorObserver from './observer'

var root = document.createElement('div')
root.id = 'app__design_editor__root'
document.body.appendChild(root)
const deObserver = new DesignEditorObserver()
ReactDOM.render(<DesignEditorView model={new DesignEditorModel(deObserver)} />, root)