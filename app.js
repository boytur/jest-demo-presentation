const express = require("express");
const app = express();
const calculatorRoute = require("./controllers/calculatorController");
const PORT = process.env.PORT || 3000;

app.use(calculatorRoute);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
