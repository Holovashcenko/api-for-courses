//load server using express
const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('combined'))

app.get('/', (req, res) => {
    console.log('Responding to root route')
    res.send('Hello from root')
})

app.get('/users', (req, res) => {
    let user1 = {
        firstName: "Vlad",
        lastName: "Holovashcenko"
    }
    let user2 = {
        firstName: "Alla",
        lastName: "Holovashcenko"
    }
    res.json([user1, user2])
})

//localhost: 3003
app.listen(3003, () => {
    console.log('Server is up and listening on 3003...')
})