class Table{
    constructor(arr){
        this.header = arr[0],
        arr.shift();
        const ultimo = arr.length-1;
        arr.splice(ultimo,1)
        this.rows = arr
    }
    get RowCount(){//get: transforma o metodo em uma variavel dinamica
        return this.rows.length
    }
    get ColumnsCout(){
        return this.header.length
    }
}
module.exports = Table