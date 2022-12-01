import _ from 'lodash'

let base = {
    display: 'inline-block'
}

let hover = _.extend({}, base, {
    outline: '1px solid #00B8FF',
    outlineOffset: '-1px',
    cursor: 'grab',
    boxShadow: '0px 10px 10px #ccc',
})

export default {base, hover}