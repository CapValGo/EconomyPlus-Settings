
function readFile() {
    //const file = new File([], "..\\temp_data\\setup_settings.mcfunction") C:\\Users\\Fendoran\\Desktop\\EconomyPlus Settings\\temp_data\\setup_settings.mcfunction
    //const read = FileReader.readAsText(file)
    const fs = require('fs')
    const read = fs.readFileSync("C:\\Users\\Fendoran\\Desktop\\EconomyPlus Settings\\temp_data\\setup_settings.mcfunction", "utf-8")

    const lines = read.split('\n')
    for (const line of lines) {
    line 
    }
    console.log(read)
}


readFile()