const express = require('express')
const app = express()
const port = 3000
const router = require("./Routes")
const formatDate = require("./helper/formatDate.js")

app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.locals.formatDate = formatDate

app.use('/', router)

app.listen(port, () => {
  console.log(`Listening On :${port}`)
})