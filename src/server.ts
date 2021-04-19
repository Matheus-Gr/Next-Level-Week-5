import express, { request, response } from "express";

const app = express();
app.get("/", (request, response) => {
  return response.json({
    message: "Hello World!",
  });
});

app.post("/users", (request, response) => {
  return response.json({ message: "Saved!" });
});

app.listen(3333, () => console.log("Server is running on port 33333"));
