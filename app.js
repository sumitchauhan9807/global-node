const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.use('/images', express.static('website/images'));
app.use('/css', express.static('website/css'));
app.use('/js', express.static('website/js'));

app.use('/fonts', express.static('website/fonts'));
app.use('/upload', express.static('website/upload'));
app.use('/style', express.static('website'));


app.get('/', function (req, res) {
   res.render('index',{
     res:res,
     locale:'asd'
   });
 });

 app.get('/contact', function (req, res) {
  res.render('contact',{
    res:res,
    locale:'asd'
  });
});

app.listen('8087',()=>{
  console.log("Listening at 8087")
})