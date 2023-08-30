const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: "your-secret-key",
    resave: true,
    saveUninitialized: true,
  })
);

// Sample users data
const users = [
  // ... (your user data)
];

app.post("/api/auth", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    const userDetails = {
      username: user.username,
      birthdate: user.birthdate,
      age: user.age,
    };

    req.session.userDetails = userDetails;
    res.json({ valid: true, userDetails });
  } else {
    res.json({ valid: false });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
