const Excel = require('exceljs')
const express = require('express')

const workbook = new Excel.Workbook()
const worksheet = workbook.addWorksheet('sheet')

worksheet.columns = [
    { header: 'Id', key: 'id', width: 10 },
    { header: 'Name', key: 'name', width: 30 },
    { header: 'Age', key: 'age', width: 10 }
]

worksheet.addRow({ id: 1, name: 'aa', age: 17 })

const app = express()

app.get('/excel', (req, res) => {
    res.setHeader('Content-Type', 'application/vnd.openxmlformats')
    res.setHeader("Content-Disposition", "attachment;filename=" + encodeURI('workbook.xlsx'))
    workbook.xlsx.write(res).then(() => res.end())
})

if (require.main === module) {
    app.listen(3000)
}
