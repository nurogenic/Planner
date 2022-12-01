(function(){
    "use strict"

    /**
     * This file represents any of the JS files we have in either the admin
     * or the storefront. It would allow us to dynamically render a view in any place
     * that it needs to render. This file would represent the controller.
     */

    document.querySelectorAll('a').forEach(element => {
        element.addEventListener('click', evt => {
            var rootElem = document.getElementById('root')

            /**
             * Clear the root element.
             */
            window.global.destroyReact(rootElem)

            /**
             * Create an instance of our model
             */
            var model = new window.global.TestModule.Model({
                text: 'Start Text'
            })

            /**
             * Renders the view
             */
            window.global.renderReact(
                // View to render
                window.global.TestModule.View,
                // Data (props) to be added to the view
                { model },
                // Place where component will render.
                rootElem
            )
        })
    })
}())