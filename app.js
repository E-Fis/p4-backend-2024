const express = require('express')
const { PrismaClient } = require('@prisma/client')

const bd = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/', (req, res)=>{
    res.send ("Bienvenidos")
})

//CReamos registro

app.post(`/post`, async(req, res)=>{
    const {title, content} = req.body
    const result = await bd.post.create({
        data:{
            title, content
        }

    })
})

// Mostrar registros

app.listen(3000, ()=>
    console.log(`Servidor en http://localhost:3000`)

)
