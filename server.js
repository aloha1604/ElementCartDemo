const express = require('express');
const app = express();
const port = 8080;

app.use('/js', express.static(`${__dirname}/js`));
app.get('/*', (req,res) =>{
    res.sendFile('index.html',{root:`${__dirname}`})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
