const express = require('express')
const app = express()

requesttime = (req, res, next)=> {
    let date=new Date()
    let heure=date.getHours()
    console.log('Time:'+ heure + 'heure  Web site closed at 17heure');
    if (heure<17 && heure>9)next();
};

// app.use(express.static(__dirname + '/'))

app.get('/home',requesttime, (req, res) => {
    res.sendFile(__dirname + '/home.html')
})

// app.use(express.static(__dirname + '/'))
app.get('/services',requesttime, (req, res) => {
    res.sendFile(__dirname + '/ourservice.html')
})
// app.use(express.static(__dirname + '/'))
app.get('/contact',requesttime, (req, res) => {
    res.sendFile(__dirname + '/contact.html')
})
// app.use(express.static(__dirname + '/'))
app.listen(5000, (err) => {
    if (err) console.log("server is not running")
    else console.log("server is runing on port 5000")
})