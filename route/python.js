const express = require('express')
const fs = require('fs')

let exec = require('child_process').exec

const route = express.Router()

let output

let code;

route.get('/fetch' , (req,res) => {
    
    res.send([output])
    console.log('get request done')
})

route.post('/' , (req,res) => {
    if(!req.body.code){
        console.log("No Code")
        return res.status(400).send({
            status : 'error',
            message : 'code not provided'
        })
    }
    let code = req.body.code

    fs.writeFileSync(__dirname+'/runable_files/pythonfiles/test.py', code)
    console.log('done code writing')
    
    if(req.body.input)
    {
        console.log('with inp')
        let path = String(__dirname);
        fs.writeFileSync(__dirname+'/runable_files/pythonfiles/input.txt', req.body.input)
        console.log('done input.txt')
        exec(`cd "${path}/runable_files/pythonfiles/" & python test.py <input.txt > output.txt`
                            ,(error, stdout , stderr ) => {
                                
                                console.log('hi')

                            })
        setTimeout(() => {
            console.log('hello')
            let temp = fs.readFileSync(`${path}/runable_files/pythonfiles/output.txt`)
            console.log('done output reading')
            output = temp.toString()
            console.log('output is '+output)
            console.log('post request done')
            return res.status(201).send({
                 status : 'added'
                 })
                },3000)
    }
    else
    {
        let path = __dirname;
        console.log('without inp')
        exec(`cd "${path}/runable_files/pythonfiles/" & python test.py > output.txt`
                            , (error, stdout , stderr ) => {
                                console.log('hi')
                            })
        setTimeout(() => {
            console.log('hello')
            let temp = fs.readFileSync(`${path}/runable_files/pythonfiles/output.txt`)
            console.log('done output reading')
            output = temp.toString()
            console.log('output is '+output)
            console.log('post request done')
    return res.status(201).send({
        status : 'added'
    })
        },3000)
        
    }
    
   

})

module.exports = route