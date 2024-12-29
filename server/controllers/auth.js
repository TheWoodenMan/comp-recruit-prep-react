
import express from "express";
const app = express()

import User from "../model/User.js";
import jwt from "jsonwebtoken";

// register endpoint

export async function public_(request, response) {
  response.json({ message: "Anyone is free to access me anytime" });
}
export async function auth(request, response) {
  response.json({ message: "You are authorized to access me" });
}