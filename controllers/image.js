const Clarifai = require ('clarifai');

/* Clarifai API Key */

const app = new Clarifai.App({
  apiKey: process.env.API_CLARIFAI
 });

 /* Clarifai API Key */

 const handleApiCall = (req, res) => {
  app.models
  .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
  .then (data => {
    console.log (data)
    res.json(data)
  })
  .catch(err => res.status(400).json("Unable to work with api"))
 };


module.exports = {
  handleApiCall: handleApiCall
};