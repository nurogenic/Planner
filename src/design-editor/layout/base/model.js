class LayoutBaseModel {
    constructor(data){
        this.data = data || {}
    }

    getReference() {
        return this.data.$reference
    }

    setChildren(children) {
        this.data.children = children
        return this;
    }

    getChildren() {
        return this.data.children
    }
}
export default LayoutBaseModel