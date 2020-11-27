const express = require('express')
const parser = ('body-parser')
const cp = require('child_process')

const app = express()
app.use(parser.json())
app.use(parser.urlencoded({
  extended: true
}))
const port = 3030
app.post('/update', (req, res) => {
    console.log(`Reciving POST request from: placeholders`);
    console.log('details:');
    console.log(req.header,req.body);
    // run needed commands here
    console.log('Running the scripts sequences:');
    cp.execSync('cd ../../emergency-storage',(e,stdout,stdrr)=>{
      console.log(stdout);
    })
    cp.execSync('git pull',(e,stdout,stdrr)=>{
      console.log(stdout);
    })
    res.sendStatus(200)
    // cp.execSync('cd ../')  
    // cp.execSync('cd backend && git pull')
})
app.listen(port, () => {
  console.log(`watchdog module is listening at http://localhost:${port}`)
})  