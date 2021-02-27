const app = require('express')();
const cors = require('cors');
const bodyparser = require('body-parser');


app.use(cors());
app.use(bodyparser.urlencoded({extended: true,limit: '2mb'}));


app.get('/',(req,res)=>{
    res.send('wlecome to API if you want to learn email sending.')
})


app.listen(3000, ()=>{
    console.log('hello world')
})