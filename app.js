const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors())
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const db = require("./app/models/");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Database Conneted `);
  })
  .catch((err) => {
    console.log(`Cannot Connect`, err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({
    message: "Welcome",
  });
});

require("./app/routes/post.routes")(app);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
