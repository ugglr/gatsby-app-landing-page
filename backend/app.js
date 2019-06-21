const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const mongoose = require("mongoose");

//Import Schemas and resolvers

const app = express();

app.use(bodyParser.json());
