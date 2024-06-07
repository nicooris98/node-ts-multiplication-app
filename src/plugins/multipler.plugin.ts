export const tableMultiplerFive = (base: number, times: number) => {
  const tableFive = {
    base: base,
    results: [0]
  }
  const arrayTable = []
  for (let index = 1; index <= times; index++) {
    arrayTable.push(base * index)
  }
  tableFive.results = arrayTable
  return tableFive
}

export const loggerMultipler = (tableNumber: any) => {
  const title = `Tabla del ${tableNumber.base}`
  let tableStr = ""
  tableNumber.results.forEach((el: number, index: number) => {
    tableStr = `${tableStr}${tableNumber.base} x ${index + 1} = ${el}\n`
  });
  return `${title}\n${tableStr}`
}