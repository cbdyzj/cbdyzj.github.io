import * as Excel from 'exceljs'
import { Application } from 'express'
import * as express from 'express'

let workbook: any = new Excel.Workbook()
let worksheet = workbook.addWorksheet('sheet')

worksheet.columns = [
    { header: 'Id', key: 'id', width: 10 },
    { header: 'Name', key: 'name', width: 30 },
    { header: 'Age', key: 'age', width: 10 }
]

worksheet.addRow({ id: 1, name: 'aa', age: 17 })

// workbook.xlsx.writeFile('excel.xlsx')

const app: Application = express()

app.get('/excel', (req, res) => {
    res.setHeader('Content-Type', 'application/vnd.openxmlformats')
    res.setHeader("Content-Disposition", "attachment;filename=" + encodeURI('workbook.xlsx'))
    workbook.xlsx.write(res).then(() => res.end())
})

app.listen(3000)
