var app = require('express')();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

var port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('listening on 8080')
});
