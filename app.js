const express = require('express')

const file = require('./package.json')

const port = 8000
const app = express()


app.get('/about-me', (peticion, respuesta) => {
    respuesta.json({
        name: 'Kelvin Jose Peralta Almonte',
        age: 30,
        country: "Colombia"
    })
})
app.post('/about-me', (peticion, respuesta) => {
    respuesta.json({
        empresa: [
            'Mercado Libre', 'Falabella', 'Globant'
        ]
    })
})

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
