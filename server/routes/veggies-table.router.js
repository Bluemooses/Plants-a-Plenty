const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
// router.get("/", (req, res) => {
//   console.log("GET /api/veggies");
//   pool
//     .query(`SELECT * FROM "Veggies";`)
//     .then((result) => {
//       res.send(result.rows);
//     })
//     .catch((error) => {
//       console.log("Error in GET Veggies", error);
//       res.sendStatus(500);
//     });
// });

/**
 * POST route template
 */
router.post("/", (req, res) => {});

module.exports = router;
