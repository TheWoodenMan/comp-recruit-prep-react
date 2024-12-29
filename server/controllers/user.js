
import express from "express";
const app = express()

// password encryption
import { hash, compare } from "bcryptjs";
import User, { findOne } from "../model/User.js";
import { sign } from "jsonwebtoken";

// register endpoint

export async function registerUser(request, response) {
  // console.log(request) // bug check
  // hash the password
  hash(request.body.password, 10)
    .then((hashedPassword) => {
      // create a new user instance and collect the data
      const user = new User({
        email: request.body.email,
        password: hashedPassword,
      });

      // save the new user
      user
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        // catch error if the new user wasn't added successfully to the database
        .catch((error) => {
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
}
export async function loginUser(request, response) {

  try {
    // Check if email exists
    const user = await findOne({ email: request.body.email });
    if (!user) {
      return response.status(404).send({
        message: "Email not found",
      });
    }

    // Compare the password entered and the hashed password found
    const isMatch = await compare(request.body.password, user.password);

    if (!isMatch) {
      return response.status(400).send({
        message: "Passwords do not match",
      });
    }

    // Create JWT token
    const token = sign(
      {
        userId: user._id,
        userEmail: user.email,
      },
      "RANDOM-TOKEN",
      { expiresIn: "24h" }
    );

    // Return success response
    return response.status(200).send({
      message: "Login Successful",
      email: user.email,
      token,
    });
  } catch (error) {
    // Catch and return server errors
    return response.status(500).send({
      message: "An error occurred during login",
      error: error.message,
    });
  }
}
