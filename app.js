const expess = require('express')

const app = expess()

app.get('/say', (req, res) => {
    res.status(200).json({ said: 'hello world' })
})

console.log('running ')
app.listen(3001)