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
    console.log('hellojava')
    let code = req.body.code

    fs.writeFileSync(__dirname+'/runable_files/javafiles/Solution.java', code)
    console.log('done code writing')
    // setTimeout(() => {
    //     console.lof('first waiting')
    // },1000)
    
    if(req.body.input)
    {
        console.log('with inp')
        fs.writeFileSync(__dirname+'/runable_files/javafiles/input.txt', req.body.input)
        let path = __dirname;
        console.log(path)
        console.log('without inp')
        exec(`cd "${path}/runable_files/javafiles/" & javac Solution.java & java Solution < input.txt > output.txt`
                            ,(error, stdout , stderr ) => {
                                
                                console.log('hi')

                            })
        setTimeout(() => {
            console.log('waiting')
        },1000)
        
        setTimeout(() => {
            console.log('hello')
            let temp = fs.readFileSync(`${path}/runable_files/javafiles/output.txt`)
            console.log('done output reading')
            output = temp.toString()
            console.log('output is '+output)
            console.log('post request done')
            return res.status(201).send({
                 status : 'added'
                 })
                },2000)
    }
    else
    {
        let path = __dirname;
        console.log(path)
        console.log('without inp')
        exec(`cd "${path}/runable_files/javafiles/" & javac Solution.java & java Solution < input.txt > output.txt`
                            ,(error, stdout , stderr ) => {
                                
                                console.log('hi')

                            })
        setTimeout(() => {
            console.log('waiting')
        },1000)
        
        setTimeout(() => {
            console.log('hello')
            let temp = fs.readFileSync(`${path}/runable_files/javafiles/output.txt`)
            console.log('done output reading')
            output = temp.toString()
            console.log('output is '+output)
            console.log('post request done')
            return res.status(201).send({
                 status : 'added'
                 })
                },2000)
        
    }
    
   

})

module.exports = route