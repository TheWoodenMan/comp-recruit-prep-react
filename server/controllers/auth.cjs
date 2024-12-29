
const express = require("express")
const app = express()

const User = require ("../model/User.cjs")
const jwt = require("jsonwebtoken");

// register endpoint

module.exports = {
public: async (request, response) => {
    response.json({ message: "Anyone is free to access me anytime" });
  },
  auth: async (request, response) => {
    response.json({ message: "You are authorized to access me" });
  }
}