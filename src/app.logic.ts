import { yarg } from "./plugins/args.plugin"
import { loggerMultipler, tableMultiplerFive } from "./plugins/multipler.plugin"
import { writeFile } from "./plugins/save.plugin"

const { b:base, l:limit, s:show } = yarg

const tableFive = tableMultiplerFive(base, limit)
const textTable = loggerMultipler(tableFive)
if(show) console.log(textTable)
writeFile("tabla-5", textTable)