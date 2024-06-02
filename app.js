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

// Mostrar registros todos 
app.get(`/posts`, async(req, res)=>{
    const posts = await bd.post.findMany()
    res.json(posts)
})

//Actualizar una bd
app.put(`/post/:id`, async(req, res)=>{
    const {id} = req.params
    const {title, content} = req.body
    const post = await bd.post.update({
        where: {id:Number(id)},
        data: {title, content}
    })
})

//Eliminar registro bd
app.delete(`/post/:id`, async(req,res)=>{
    const {id} =req.params
    const post = await bd.post.delete({
        where: {id: Number(id)}
    })
    res.json('Eliminar')
})

app.listen(3000, ()=>
    console.log(`Servidor en http://localhost:3000`)

)
