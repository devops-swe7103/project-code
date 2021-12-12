const express = require(`express`);
const path = require(`path`);

// initializing express
const app = express();

// serving static file assets from /public
app.use(express.static(path.join(__dirname, `public`)));

// setting up middleware
app.set(`view engine`, `ejs`);
app.set(`views`, path.join(__dirname, `/views`));

// routing
app.get(`/`, (req, res) => {
  res.render(`home`);
});

// routes list
// /search/
// /search/city/
// /search/postcode/
// /properties/all/
// /properties/in/:postcode
// /property/add
// /property/:propertyID
// /wishlist
// /profile/:userID
// /agent/:agentID

// all routes below

// /search/
app.get(`/search/`, (req, res) => {
  res.send(`GET: /search/`);
});
app.post(`/search/`, (req, res) => {
  res.send(`POST: /search/`);
});

// /search/city/
app.get(`/search/city/`, (req, res) => {
  res.send(`GET: /search/city/`);
});
app.post(`/search/city/`, (req, res) => {
  res.send(`POST: /search/city/`);
});

// /search/postcode/
app.get(`/search/postcode/`, (req, res) => {
  res.send(`GET: /search/postcode/`);
});
app.post(`/search/postcode/`, (req, res) => {
  res.send(`POST: /search/postcode/`);
});

// /properties/all/
app.get(`/properties/all/`, (req, res) => {
  res.send(`GET: /properties/all/`);
});
app.post(`/properties/all/`, (req, res) => {
  res.send(`POST: /properties/all/`);
});

// /properties/postcode/:postcode
app.get(`/properties/postcode/:postcode`, (req, res) => {
  const { postcode } = req.params;
  if (postcode) {
    res.send(`GET: /properties/postcode/:postcode ${postcode}`);
  } else {
    res.send(`ERROR: GET: /properties/postcode/:postcode ${postcode}`);
  }
});
app.post(`/properties/postcode/:postcode`, (req, res) => {
  const { postcode } = req.params;
  if (postcode) {
    res.send(`POST: /properties/postcode/:postcode ${postcode}`);
  } else {
    res.send(`ERROR: POST: /properties/postcode/:postcode ${postcode}`);
  }
});

// /properties/city/:city
app.get(`/properties/city/:city`, (req, res) => {
  const { city } = req.params;
  if (city) {
    res.send(`GET: /properties/city/:city ${city}`);
  } else {
    res.send(`ERROR: GET: /properties/city/:city ${city}`);
  }
});
app.post(`/properties/city/:city`, (req, res) => {
  const { city } = req.params;
  if (city) {
    res.send(`POST: /properties/city/:city ${city}`);
  } else {
    res.send(`ERROR: POST: /properties/city/:city ${city}`);
  }
});

// /property/add
app.get(`/property/add`, (req, res) => {
  res.send(`GET: /property/add`);
});
app.post(`/property/add`, (req, res) => {
  res.send(`POST: /property/add`);
});

// /property/:propertyID
app.get(`/property/:propertyID`, (req, res) => {
  const { propertyID } = req.params;
  if (propertyID) {
    res.send(`GET: /property/:propertyID ${propertyID}`);
  } else {
    res.send(`ERROR: GET: /property/:propertyID ${propertyID}`);
  }
});
app.post(`/property/:propertyID`, (req, res) => {
  const { propertyID } = req.params;
  if (propertyID) {
    res.send(`POST: /property/:propertyID ${propertyID}`);
  } else {
    res.send(`ERROR: POST: /property/:propertyID ${propertyID}`);
  }
});

// /wishlist
app.get(`/wishlist`, (req, res) => {
  res.send(`GET: /wishlist`);
});
app.post(`/wishlist`, (req, res) => {
  res.send(`POST: /wishlist`);
});
// /profile/:userID
app.get(`/profile/:userID`, (req, res) => {
  const { userID } = req.params;
  if (userID) {
    res.send(`GET: /profile/:userID ${userID}`);
  } else {
    res.send(`ERROR: GET: /profile/:userID ${userID}`);
  }
});
app.post(`/profile/:userID`, (req, res) => {
  const { userID } = req.params;
  if (userID) {
    res.send(`POST: /profile/:userID ${userID}`);
  } else {
    res.send(`ERROR: POST: /profile/:userID ${userID}`);
  }
});

// /agent/:agentID
app.get(`/agent/:agentID`, (req, res) => {
  const { agentID } = req.params;
  if (agentID) {
    res.send(`GET: /agent/:agentID ${agentID}`);
  } else {
    res.send(`ERROR: GET: /agent/:agentID ${agentID}`);
  }
});
app.post(`/agent/:agentID`, (req, res) => {
  const { agentID } = req.params;
  if (agentID) {
    res.send(`POST: /agent/:agentID ${agentID}`);
  } else {
    res.send(`ERROR: POST: /agent/:agentID ${agentID}`);
  }
});

// starting up the server on port 5000
const port = 5000;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
