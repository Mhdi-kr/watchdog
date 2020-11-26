const cp = require('child_process')
const express = require('express')
const app = express()
const port = 3030
app.post('/update', (req, res) => {
    console.log(`Reciving POST request from: placeholders`);
    // run needed commands here
    // cp.execSync('cd frontend && git pull')
    // cp.execSync('cd ../')
    // cp.execSync('cd backend && git pull')
})
app.listen(port, () => {
  console.log(`watchdog module is listening at http://localhost:${port}`)
})  