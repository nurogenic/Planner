import _ from 'lodash'
import references from 'design-editor/references'

class ToolDrag {
    constructor(elementEditor, evt) {
        this.elementEditor = elementEditor;
        this.styles = this.elementEditor.getStyles()

        var rect = evt.currentTarget.getBoundingClientRect();
        this.state = this.start = {
            x: evt.pageX - rect.left,
            y: evt.pageY - rect.top
        }

        this._onMouseMove = this.elementEditor.onMouseMove.bind(this.elementEditor)
        this._onMouseUp = this.elementEditor.onMouseUp.bind(this.elementEditor)
        document.addEventListener('mousemove', this._onMouseMove)
        document.addEventListener('mouseup', this._onMouseUp)
    }

    move(evt) {
        this.state = {
            y: evt.pageY - this.start.y + document.documentElement.scrollTop,
            x: evt.pageX - this.start.x + document.documentElement.scrollLeft,
        }

        this.state.parent = references.getModelFromPoint(this.state.x, this.state.y, [evt.target])

        console.log(this.state.parent)

        this.elementEditor.setStyles({
            position: 'absolute',
            cursor: 'grabbing',
            zIndex: 99999,
            top: this.state.y,
            left: this.state.x,
        })
        return this
    }

    getState() {
        return this.state;
    }

    destroy() {
        document.removeEventListener('mousemove', this._onMouseMove)
        document.removeEventListener('mouseup', this._onMouseUp)

        this.elementEditor =
        this.$rel =
        this.styles =
        this.start = null
        return this
    }
}

export default ToolDrag