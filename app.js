var express = require('express');
var app = express();
app.use(express.static(__dirname));

var compliments = ["Dude you rock!", 
"You look pretty good today.", 
"You don't look half bad!", 
"On a scale of 1-10 for personality, you are a solid 9.5.", 
"You are so cool bro!", 
"Your hair is on point today.",
"How are you so polite?",
"I like your jacket.", 
"Let's hang out and never stop hanging out.",
"Teach me how to be as charming as you are!",
"Your name is so fun to say",
"Your feet are too perfect it's almost illegal.",
"Can I have your socks? They look so hot on you",
"You're a great gift giver.",
"You're my poster child.",
"Has anyone told you how perfect your right hand is?",
"You are quite strapping M'Lady.",
"Your IQ makes ints overflow.",
"All my friends know how cool you are!",
"Looking fly today I see.",
"Wow fishing for compliments again?"];

app.get('/', function (req, res) {
  res.sendfile('index.html');
});

app.get('/getcompliment', function (req, res) {
  var obj = JSON.parse(JSON.stringify(req.query));
  var temp = "";
  while(true)
  {
  	temp = compliments[Math.floor(Math.random() * (compliments.length))]
  	if (obj.name !== temp) {
  		break;
  	}
  }
  res.send('{"stuff": "' + temp +'"}');
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});