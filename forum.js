e = require('express');
fs = require('fs')
nJ = require('nunjucks')

s = e()
t = fs.readFileSync(__dirname + '/forum.html', 'utf-8')

data = {
  puppies: {
    topic: true,
    title:'Puppies be cool',
    message: [ 'Bad grammar', 'Thats not what the forums about', 'You have worse grammar', '(-_-)' ]
  }
}

s.get('/', function (req, res) {
  res.send(nJ.renderString(t, { topics: data }))
})

s.get('/add', function (req, res) {

})

s.get('/page/:id', function (req, res) {
  id = req.params.id
  res.send(nJ.renderString(t, data[id]))
})

s.get('/add/:id', function (req, res) {

})

s.listen(2222)
