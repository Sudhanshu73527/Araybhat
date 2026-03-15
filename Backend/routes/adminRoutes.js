import express from "express";

const router = express.Router();

// ADMIN LOGIN
router.post("/login", (req, res) => {

  const { email, password } = req.body;

  // Demo Admin Credentials
  if (email === "admin@gmail.com" && password === "123456") {

    res.json({
      message: "Login Successful",
      token: "admin123token"
    });

  } else {

    res.status(401).json({
      message: "Invalid Email or Password"
    });

  }

});

export default router;