const express = require('express');
const fs = require('fs');
const getMessages = require('./Messages/MessageProvider');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('public/images'));

//For each element in a list create image object with attributes publicPath and image name
const images = fs.readdirSync('public/images/mnt'); 
const imagesObjects = images.map(image => {
  return {
    publicPath: 'images/mnt/' + image,
    name: image
  };
});

app.get('/', async (req, res) => {
  const messages = [];
  console.log('messages: ', messages)
  const data = {
    title: 'My Pages',
    images: imagesObjects.slice(0, 2),
    messages: messages
  };

  res.render('index', data);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
