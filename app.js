const express = require('express');
const app = express();
app.set('view engine', 'ejs');

var i18n = require('./i18n.js');
app.use(i18n);

app.use('/images', express.static('website/images'));
app.use('/css', express.static('website/css'));
app.use('/js', express.static('website/js'));

app.use('/fonts', express.static('website/fonts'));
app.use('/upload', express.static('website/upload'));
app.use('/style', express.static('website'));




 app.get('/contact/:lang?', function (req, res) {
  req.params.lang ? req.setLocale(req.params.lang) :   req.setLocale('en')
  res.render('contact',{
    res:res,
    locale:req.params.lang
  });
});

app.get('/overview/:lang?', function (req, res) {
  req.params.lang ? req.setLocale(req.params.lang) :   req.setLocale('en')
  res.render('overview',{
    res:res,
    locale:req.params.lang
  });
});

app.get('/:lang?', function (req, res) {
  req.params.lang ? req.setLocale(req.params.lang) :   req.setLocale('en')
   res.render('index',{
     res:res,
     locale:req.params.lang
   });
 });

app.listen('8088',()=>{
  console.log("Listening at 8087")
})