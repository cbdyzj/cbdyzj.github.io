const express = require('express')
const { Workbook } = require('exceljs')

const app = express()
const workbook = new Workbook()
const worksheet = workbook.addWorksheet('sheet')

worksheet.columns = [
    { header: 'Id', key: 'id', width: 10 },
    { header: 'Name', key: 'name', width: 30 },
    { header: 'Age', key: 'age', width: 10 }
]

worksheet.addRow({ id: 1, name: 'aa', age: 17 })

workbook.xlsx.writeFile('excel.xlsx')

app.get('/excel', async (req, res) => {
    res.setHeader('Content-Type', 'application/vnd.openxmlformats')
    res.setHeader("Content-Disposition", "attachment;filename=" + encodeURI('workbook.xlsx'))
    await workbook.xlsx.write(res)
    res.end()
})

if (require.main === module) {
    app.listen(3000)
}
