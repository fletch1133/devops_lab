const express = require('express')
const app = express()
const path = require('path')
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '2aeea0988fa743c883b0fe9095d2bcbd',
  captureUncaught: true,
  captureUnhandledRejections: true,
});

app.use(express.json());

try {
    if (index === -1 && name !== '') {
        students.push(name)
        res.status(200).send(students)
        rollbar.info('Animals successfully added')
    } else if (name === ''){
        res.status(400).send('You must enter a species.')
        rollbar.error('attempted to add blank animal species')
    } else {
        res.status(400).send('That animal already exists.')
        rollbar.warning('attempted dupe animal')
    }
} catch (err) {
    console.log(err)
    rollback.error(err)
}


