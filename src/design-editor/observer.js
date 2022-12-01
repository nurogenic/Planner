class DesignEditorObserver {
    constructor(data){
        this.$promises = {}
    }

    on(key) {
        if(!this.$promises.hasOwnProperty(key)){
            this.$promises[key] = new Promise((resolve, reject) => {
                this.$callbacks[key] = {resolve, reject}
            });
        }

        return this.$promises[key];
    }

    trigger() {
        let args = Array.prototype.slice.call(arguments)
        let key = args.shift();
        if(this.$callback.hasOwnProperty(key)){
            this.$callback[key].resolve(args);
        }
    }
}

export default DesignEditorObserver