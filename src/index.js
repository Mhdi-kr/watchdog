require('dotenv').config();
const express = require('express')
const parser = require('body-parser')
const cp = require('child_process')
const app = express()

app.use(parser.json())
app.use(parser.urlencoded({
  extended: true
}))

const port = 3030

app.post('/update', (req, res) => {
  if(req.body.repository.uuid === process.env.REPO_UUID){
    console.log(`Reciving POST request from bitbucket, by ${req.body.push.actor.display_name}`);
    // run needed commands here
    console.log('Running deployment shell script:');
    const deploySequence = cp.execFile('deploy.sh', (e,stdout,stdrr) => {
      console.log(e,stdout,stderr);
    })
    res.sendStatus(200)
  }
})
app.listen(port, () => {
  console.log(`watchdog module is listening at http://localhost:${port}`)
})  