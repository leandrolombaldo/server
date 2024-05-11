const express = require("express");
const productsRouter = require("./routes/products");

const app = express();

app.use("/products", productsRouter);

const port = 3100;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
