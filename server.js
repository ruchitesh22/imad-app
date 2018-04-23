var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
'article-one':{
    'title':'article1',
    'content':`
  <h1>Article-One</h1>
  <p>This is the paragraph of article-one</p>
  `},
'article-two':{
    'title':'article2',
    'content':`
  <h1>Article-Two</h1>
  <p>This is the paragraph of article-Two</p>
  `}
};

function createtemp(data){
    var title=data.title;
    var content=data.content;
    var htmlTemp=
        `
        <html>
        <head>
        <title>
        ${title}
        </title>
        </head>
        <body>
        ${content}
        </body>
        </html>
        `;
    return htmlTemp;
    
}
var counter=0;
app.get('/ruchitesh',function(req,res){
   counter=counter+1;
   res.send(counter.toString());
});
app.get('/:articlename',function(req,res){
    var articlename=req.params.articlename;
    res.send(createtemp(articles[articlename]));
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
