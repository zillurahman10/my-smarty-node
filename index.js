const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello from my smarty pant kalo!')
})

const users = [
    {
        id: 1,
        name: 'Sabana',
        email: 'sabana@gmail.com',
        phone: '0178888888'
    },
    { id: 2, name: 'Sabana', email: 'sabana@gmail.com', phone: '0178838888' },
    { id: 3, name: 'habana', email: 'sabana@gmail.com', phone: '0178848888' },
    { id: 4, name: 'nabana', email: 'sabana@gmail.com', phone: '0178858888' },
    { id: 5, name: 'labana', email: 'sabana@gmail.com', phone: '0178878888' },
    { id: 6, name: 'khabana', email: 'sabana@gmail.com', phone: '0178888888' },
    { id: 7, name: 'Sabana', email: 'sabana@gmail.com', phone: '0178888888' }
]

app.get('/user', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase()
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users)
    }
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id
    const user = users.find(u => u.id == id)
    res.send(user)
})

app.post('/user', (req, res) => {
    const user = req.body;
    user.id = users.length + 1
    users.push(user)
    res.send(user)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})