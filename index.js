const express = require(`express`);
const path = require(`path`);
const bodyParser = require(`body-parser`);

// initializing express
const app = express();

// using parsers to process form submitted and json data
// create application/json parser
const jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
const urlEncodedParser = bodyParser.urlencoded({ extended: true });

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

// /base
app.get(`/base`, (req, res) => {
  res.render(`base`);
});

// /search/
// get method will render the search form
app.get(`/search/`, (req, res) => {
  // res.send(`GET: /search/`);
  res.render(`search`);
});
// post method will send the data to the server
app.post(`/search/`, urlEncodedParser, (req, res) => {
  if (!req.body) {
    res.sendStatus(400);
  } else {
    // res.send(`POST: /search/`);
    console.log("Got body:", req.body);

    let { city, postcode, minBeds, maxBeds, minPrice, maxPrice } = req.body;

    // res.send("Got body:", city, postcode, minBeds, maxBeds, minPrice, maxPrice);
    res.send(`Got body:,
     ${city},
     ${postcode},
     ${minBeds},
     ${maxBeds},
     ${minPrice},
     ${maxPrice}`);
    // res.sendStatus(200);

    // TODO: get the data from req.body, query the db for data, process and display on results page
  }
});

// /search/city/:city
// get method will render the result page of properties in a city
app.get(`/search/city/:city`, (req, res) => {
  res.send(`GET: /search/city/:city`);
});
app.post(`/search/city/:city`, (req, res) => {
  res.send(`POST: /search/city/:city`);
});

// /search/postcode/:postcode
// get method will render the result page of properties in a particular postcode
app.get(`/search/postcode/:postcode`, (req, res) => {
  res.send(`GET: /search/postcode/:postcode`);
});
app.post(`/search/postcode/:postcode`, (req, res) => {
  res.send(`POST: /search/postcode/:postcode`);
});

// /properties/all/
app.get(`/properties/all/`, (req, res) => {
  // res.send(`GET: /properties/all/`);
  res.render(`property-listing-page`);
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
    // res.send(`GET: /property/:propertyID ${propertyID}`);
    res.render(`single-property`, { propertyID });
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

// /property/:propertyID/appointment
app.get(`/property/:propertyID/appointment`, (req, res) => {
  const { propertyID } = req.params;
  if (propertyID) {
    // res.send(`GET: /property/:propertyID/appointment ${propertyID}`);
    res.render(`contact-agent`, { propertyID });
  } else {
    res.send(`ERROR: GET: /property/:propertyID/appointment ${propertyID}`);
  }
});
app.post(`/property/:propertyID/appointment`, (req, res) => {
  const { propertyID } = req.params;
  if (propertyID) {
    res.send(`POST: /property/:propertyID/appointment ${propertyID}`);
  } else {
    res.send(`ERROR: POST: /property/:propertyID/appointment ${propertyID}`);
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
