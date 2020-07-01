const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  console.log("GET /api/materials");
  pool
    .query(`SELECT * FROM "Materials";`)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error in GET materials", error);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  console.log(req.body);
  
});

module.exports = router;
