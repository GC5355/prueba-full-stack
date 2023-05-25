const express = require('express');

const PORT = process.env.PORT || 80;

const app = express();


/** API */
app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
  });

  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});