const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fridgebuddy");

const recipeSeed = [
  {
    image:
      "https://www.edamam.com/web-img/32d/32da8c201c42d8aae7a7f51449c83e2a.jpg",
    title: "Crisp Tacos Picadillo",
  },
  {
    image:
      "https://www.edamam.com/web-img/274/274e308efd9040b2a6a6963864a7c215.jpg",
    title: "Picadillo Tacos",
  },
  {
    image:
      "https://www.edamam.com/web-img/e67/e670c8de536f4beceedc0f4707efec50.jpg",
    title: "Crock-Pot Chicken Tacos Recipe",
  },
];
