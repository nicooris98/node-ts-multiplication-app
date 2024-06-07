import * as fs from "fs"

const outputPath = "outputs"

export const writeFile = (fileName: string, text: string) => {
  fs.mkdirSync(outputPath, { recursive: true })
  fs.writeFile(`${outputPath}/${fileName}.txt`, text, (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log("Archivo creado")
  })
}