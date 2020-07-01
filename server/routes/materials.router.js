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
  values = [
    req.body.sqFt,
    req.body.width,
    req.body.length,
    req.body.height,
    req.body.hammer,
    req.body.screws,
    req.body.soilCuYd,
  ];

  queryText = `INSERT INTO "Materials" ("sqFt", "wood_width", "wood_length", "wood_height", "screws", "drill", "cuYd") VALUES ($1, $2, $3, $4, $5, $6, $7);`;
  console.log(values);

  pool
    .query(queryText, values)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("axios POST err", error);
    });
});

module.exports = router;
