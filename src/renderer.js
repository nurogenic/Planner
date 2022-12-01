import React from 'react'
import ReactDOM from 'react-dom'

/**
 * Render a React View.
 * @param {ReactComponent} view This needs to be a react view.
 * @param {Object} data This will be the data in the view.
 * @param {HTMLElement} element This will be where the component renders. 
 */
function renderReact(){
    var args = Array.prototype.slice.call(arguments)
    var element = args.pop()
    ReactDOM.render(React.createElement.apply(React, args), element)
}

function destroyReact(elem){
    ReactDOM.unmountComponentAtNode(elem)
}

function renderAngular(){
    // Add angular render here
}

/**
 * This exposes the renderer on the global scope to allow us to render
 * in non-single page applications.
 */
window.global = window.global || {}
window.global.renderReact = renderReact
window.global.destroyReact = destroyReact
window.global.renderAngular = renderAngular
export { renderReact, renderAngular }