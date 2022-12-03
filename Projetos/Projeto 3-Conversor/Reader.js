const fs =  require('fs')
const util = require('util')
class Reader{
    constructor(){
        this.reader = util.promisify(fs.readFile)//transforma a função readFile em uma promisse
    }
    async Read(path){
        try {
            return await this.reader(path,'utf8')
        } catch (error) {
            return error
        }
    }
}
module.exports = Reader