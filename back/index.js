require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./sequelize-client");
const app = express();
const port = 3001;

sequelize
  .sync()
  .then(() => {
    console.log("Connexion à la base de données établie");
  })
  .catch((error) => {
    console.error("Erreur de connexion à la base de données:", error);
  });
const corsOptions = {
  origin: "http://localhost:3000", // Remplacez par l'URL de votre frontend
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(express.json());
app.use(cors(corsOptions));

// Exemple de route
app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
