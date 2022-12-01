class ElementBaseModel {
    constructor(data){
        this.data = data
    }

    getReference() {
        return this.data.$reference || null
    }

    getLabel() {
        return this.data.$label
    }
}
export default ElementBaseModel