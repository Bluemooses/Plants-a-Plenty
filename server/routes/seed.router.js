const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET SEED COUNT FOR SPECIFIC GARDEN BED
 */

router.get("/", (req, res) => {
  let queryText = pool.query(queryText);
});

/**
 * POST SEED COUNT
 */

router.post("/", (req, res) => {
  console.log(req);
  console.log(req.body);
  values = [
    req.body.carrot,
    req.body.bellPepper,
    req.body.corn,
    req.body.peas,
    req.body.beans,
    req.body.lettuce,
    req.body.gardenBedId
  ];

  const queryText = `INSERT INTO "Seeds" ("carrot_seeds", "bell_pepper_seeds", "corn_seeds", "pea_seeds", "greenbean_seeds", "lettuce_seeds", "garden_bed_id") VALUES ($1, $2, $3, $4, $5, $6, $7);`;
  // const queryText2 = `INSERT INTO GardenBed ("")`
  pool
    .query(queryText, values)
    .then((result) => {
      console.log(req.body);

      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("axios POST err", error);
    });
});

module.exports = router;
