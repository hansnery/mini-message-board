var express = require('express');
var router = express.Router();

// Messages array holding sample messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

/* GET form for new message */
router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Post a New Message' }); // Assuming 'new.jade' is your form template
});

/* POST new message */
router.post('/new', function(req, res, next) {
  // Extract the message details from the request body
  const user = req.body.user;
  const text = req.body.text;
  const added = new Date();

  // Create a new message object
  const newMessage = { text, user, added };

  // Here, you would typically save the new message to a database
  // For this example, we'll simulate saving by pushing to the 'messages' array
  messages.push(newMessage);

  // Redirect the user to the home page after posting a new message
  res.redirect('/');
});


module.exports = router;
