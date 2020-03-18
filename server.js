const express = require('express')

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended : true}))

app.set('view engine', 'hbs')

app.set('views' , __dirname+'/view')

app.use('/', express.static(__dirname+'/public'))

app.use('/python', require('./route/python'))

app.use('/java' , require('./route/java'))

app.use('/cpp' , require('./route/cpp'))

app.get('/' , (req,res) => {
    res.render('home')
})

app.listen(8000, () => {
    console.log("Running on http://localhost:8000")
})