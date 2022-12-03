const fs =  require('fs')
const util = require('util')
class WriterHtml{
    constructor(){
        this.writer = util.promisify(fs.writeFile)
    }
   async  Write(filename,data){
    try {
        await this.writer(filename,data)
        return true
    } catch (error) {
        return false        
    }    
    }
}
module.exports = WriterHtml