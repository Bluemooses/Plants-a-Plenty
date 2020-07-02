const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET SEED COUNT FOR SPECIFIC GARDEN BED
 */

router.get("/", (req, res) => {});

/**
 * POST SEED COUNT
 */

router.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.body.carrot);
  values = [
    req.body.carrot,
    req.body.bellPepper,
    req.body.corn,
    req.body.peas,
    req.body.beans,
    req.body.lettuce,
  ];

  queryText = `INSERT INTO "Seeds" ("carrot_seeds", "bell_pepper_seeds", "corn_seeds", "pea_seeds", "greenbean_seeds", "lettuce_seeds") VALUES ($1, $2, $3, $4, $5, $6);`;
  pool
    .query(queryText, values)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("axios POST seeds ERR", error);
    });
});

module.exports = router;
