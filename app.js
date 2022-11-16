const express = require('express')

const file = require('./package.json')

const port = 8000
const app = express()



app.patch('/about-me', (peticion, respuesta) => {
    respuesta.json({
        empresa: [
            'Jugar Ajedrez', 'Leer', 'Jugar Basket'
        ]
    })
})



app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
