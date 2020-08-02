import express from "express";
const app = express();

import "./mongodb";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Aplicação escutando na porta ${port}`);
});

// import "./mongodb";
