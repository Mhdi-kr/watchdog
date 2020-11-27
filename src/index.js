const cp = require('child_process')
const express = require('express')
const app = express()
const port = 3030
app.post('/update', (req, res) => {
    console.log(`Reciving POST request from: placeholders`);
    console.log('details:');
    console.log(req.header,req.body);
    // run needed commands here
    console.log('Running the scripts sequences:');
    cp.exec('echo cpworking!',(e,stdout,stdrr)=>{
      console.log(stdout);
    })
    res.sendStatus(200)
    res.send('got it')
    // cp.execSync('cd ../')  
    // cp.execSync('cd backend && git pull')
})
app.listen(port, () => {
  console.log(`watchdog module is listening at http://localhost:${port}`)
})  