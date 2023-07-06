const { Router } = require('express');
const router = Router();


router.get("/", (req, res) => {
    res.send("This is a GET");
  });
  
  router.post("/", (req, res) => {
    console.log(req.body);
    res.send("This is a POST");
  });
  
  router.put("/", (req, res) => {
    res.send("respondiendo al put");
  });
  
  router.delete("/", (req, res) => {
    res.send("respondiendo al delete");
  });
  
  // exportar en node
  module.exports = router;