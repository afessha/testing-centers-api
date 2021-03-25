const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const testingCenters = [
    {
      id: 1,
      name: "Glasgow Airport Testing Center",
      venue: "Drive Through Site",
      latitude: 55.865101,
      longitude: -4.433177
    },
    {
      id: 2,
      name: "Glasgow Gorbals Testing Center ",
      venue: "St Francis Centre",
      latitude: 55.848052,
      longitude: -4.247668
    },
    {
      id: 3,
      name: "Glasgow Pollok Testing Center",
      venue: "Pollok Community Centre",
      latitude: 55.82419968,
      longitude: -4.35344184
    },
    {
      id: 4,
      name: "Glasgow Riverside Testing Center",
      venue: "Riverside Museum car park",
      latitude: 55.86511,
      longitude: -4.306884
    },
    {
      id: 5,
      name: "Glasgow City Testing Center",
      venue: "Glasgow Caledonian ARC",
      latitude: 55.8672,
      longitude: -4.2502
    },
    {
      id: 6,
      name: "Glasgow Easterhouse Testing Center",
      venue: "Easterhouse Social Work car park",
      latitude: 55.86600113,
      longitude: -4.11926267
    },
    {
      id: 7,
      name: "Glasgow Castlemilk Testing Center ",
      venue: "Barlia Sports Complex",
      latitude: 55.80500031,
      longitude: -4.23283695
    },
    {
      id: 8,
      name: "West Glasgow Testing Center",
      venue: "West Glasgow ACH",
      latitude: 55.86667,
      longitude: -4.29667
    },
    {
      id: 9,
      name: "Aberdeen Airport Testing Center  ",
      venue: "Drive Through Site",
      latitude: 57.2012,
      longitude: -2.1920
    },
    {
      id: 10,
      name: "Cumbernauld Testing Center",
      venue: "Broadwood Stadium",
      latitude: 55.9446,
      longitude: -4.0378
    },
    {
      id: 11,
      name: "Dundee Testing Center  ",
      venue: "Dudhope Castle",
      latitude: 56.4645,
      longitude: -2.9825
    },
    {
      id: 12,
      name: "Edinburgh Airport Testing Center",
      venue: "Drive Through Site",
      latitude: 55.9508,
      longitude: -3.3615
    },
    {
      id: 13,
      name: "Glenrothes Testing Center",
      venue: "Bankhead Park",
      latitude: 56.1951,
      longitude: -3.1732
    },
    {
      id: 14,
      name: "Prestwick Testing Center  ",
      venue: "Drive Through Site",
      latitude: 55.5098,
      longitude: -4.5923
    },
    {
      id: 15,
      name: "Inverness Testing Center",
      venue: "University of the Highlands and Islands campus",
      latitude: 57.477772,
      longitude: -4.224721
    },
    {
      id: 16,
      name: "Arbroath Testing Center",
      venue: "Bruce House car park",
      latitude: 56.5591,
      longitude: -2.5915
    },
    {
      id: 17,
      name: "Cumbernauld Testing Center  ",
      venue: "Fleming House car park",
      latitude: 55.9457,
      longitude: -3.9925
    },
    {
      id: 18,
      name: "Dunfermline Testing Center",
      venue: "Dell Farquharson House",
      latitude: 56.0717,
      longitude: -3.4522
    },
    {
      id: 19,
      name: "Dumfries Testing Center",
      venue: "Brooms Road Car Park",
      latitude: 55.06824,
      longitude: -3.6015
    },
    {
      id: 20,
      name: "East Kilbride Testing Center  ",
      venue: "Red Deer Centre",
      latitude: 55.7579,
      longitude: -4.1969
    },
    {
      id: 21,
      name: "Edinburgh City Testing Center",
      venue: "Usher Hall",
      latitude: 55.9471,
      longitude: -3.2054
    },
    {
      id: 22,
      name: "Edinburgh Granton Testing Center",
      venue: "Ainslie Park Leisure Centre Car Park",
      latitude: 55.9779,
      longitude: -3.2422
    },
    {
      id: 23,
      name: "Edinburgh Leith Testing Center  ",
      venue: "Leith Library",
      latitude: 55.975265,
      longitude: -3.17988
    },
    {
      id: 24,
      name: "Edinburgh Sighthill Testing Center",
      venue: "Gate 55, Sighthill",
      latitude: 55.9273,
      longitude: -3.2994
    },
    {
      id: 25,
      name: "Paisley Testing Center",
      venue: "Bridge Street car park",
      latitude: 55.8473,
      longitude: -4.4401
    },
    {
      id: 26,
      name: "Hamilton Testing Center  ",
      venue: "Eddlewood Public Hall",
      latitude: 55.7559240,
      longitude: -4.0480932
    },
    {
      id: 27,
      name: "Inverclyde Testing Center",
      venue: "Crawfurds Burn Community Centre",
      latitude: 55.9416,
      longitude: -4.7334
    },
    {
      id: 28,
      name: "Kilmarnock Testing Center",
      venue: "Grand Hall",
      latitude: 55.6097,
      longitude: -4.4940
    },
    {
      id: 29,
      name: "Kirkcaldy Testing Center  ",
      venue: "Overton Community Centre",
      latitude: 56.1322,
      longitude: -3.1447
    },
    {
      id: 30,
      name: "Oban Testing Center",
      venue: "Mossfield car park",
      latitude: 56.4152,
      longitude: -5.4710
    },
    {
      id: 31,
      name: "Perth Testing Center",
      venue: "Thimblerow car park",
      latitude: 56.3972,
      longitude: -3.4378
    },
    {
      id: 32,
      name: "St Andrews Testing Center  ",
      venue: "Victoria Memorial Hall",
      latitude: 56.3398,
      longitude: -2.7967
    },
    {
      id: 33,
      name: "Stirling Testing Center",
      venue: "Forthside Way, next to The Engine Shed",
      latitude: 56.1184,
      longitude: -3.9296
    },
    {
      id: 34,
      name: "West Dunbartonshire Testing Center",
      venue: "Napier Hall",
      latitude: 55.9254,
      longitude: -4.4580
    },
    {
      id: 35,
      name: "Wick Testing Center",
      venue: "Riverside car park",
      latitude: 58.4427,
      longitude: -3.0946
    },
    {
      id: 36,
      name: "Glenrothes Testing Center",
      venue: "Glenrothes Miners Charitable Society",
      latitude: 56.2008,
      longitude: -3.1599
    },
    {
      id: 37,
      name: "Galashiels Testing Center",
      venue: "Langlee Community Centre",
      latitude: 55.6123,
      longitude: -2.7732
    }
  ]
  ;
//Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Getting
app.get("/", function(req, res) {
  res.send(testingCenters);
});

//Filtering by roomId
app.get("/testing-centers/:id", function(req, res) {
  res.send(testingCenters.find(result => result.id == req.params.id));
  res.send(200);
});
//Filter by name
app.get("/testing-centers", function(req, res) {
  res.send(
    testingCenters.filter(
      result => result.name === req.query.name || !req.query.name
    )
  );
  res.send(201);
});
//Post
app.post("/postTesting-center", function(req, res) {
  testingCenters.push(req.body);
  res.send("Success");
});
//Delete
app.delete("/testing-centers/:id", function(req, res) {
  testingCenters.splice(
    testingCenters.findIndex(result => result.id === req.params.id),
    1
  );
  res.send(200);
});

//Update
app.put("/testing-centers/:roomId", function(req, res) {
  let toBeUpdated = testingCenters.find(result => result.id === req.params.id);
  toBeUpdated = {...toBeUpdated, ...req.body}
  res.send(200);
});

//
app.listen(process.env.PORT || 3000, function() {
  console.log("server listening on port 3000!");
});