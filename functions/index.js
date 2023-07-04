const functions = require("firebase-functions");

const express =require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require('stripe')('sk_test_51LuGd9SHqoT2lnnHTPxKNeKpUPj51Y4tG0sRuHnyItDmyY3W3JrcfRmFqVTzZin4P5n9kks5kb10Hg244guqbzsw00qC0AgbRn')
//api
//api config
const app =express();
//middleware
app.use(cors({origin:true}));

app.use(express.json());

app.get('/',(request,response)=>response.status(200).send('hello world '))

app.post('/payment/create', async (request,response)=>
{
 const total= request.query.total;
 console.log("Payment request reciecved foramount>>>",total);

 const paymentIntent = await stripe.paymentIntents.create({
    amount :total,
    currrency:'usd',
 });
 response.status('201').send({
    clientSecret:paymentIntent.client_secret
 })

})

exports.api =functions.https.onRequest(app);