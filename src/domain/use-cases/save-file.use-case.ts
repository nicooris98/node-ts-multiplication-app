import * as fs from "fs"

export interface SaveFileUseCase {
  execute: (options: Options) => boolean
}

export interface Options {
  fileContent: string
  destination?: string
  fileName?: string
}

export class SaveFile implements SaveFileUseCase {
  constructor() { }

  execute({ fileContent, destination = "outputs", fileName = "table" }: Options) {
    try {
      fs.mkdirSync(destination, { recursive: true })
      fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent)
      console.log("Archivo creado")
      return true
    } catch(err) {
      console.log(err)
      return false
    }    
  }
}