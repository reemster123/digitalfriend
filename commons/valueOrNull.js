const valueOrNull = (v, isString) => { 
    if (v) {
        if (isString) {
            return `"${v}"`
        } else return v
    } else { 
        return 'NULL'
    }
}; 

module.exports = valueOrNull;