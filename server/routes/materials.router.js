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

//  make this async
// router.post("/", (req, res) => {
//   values = [
//     req.body.sqFt,
//     req.body.width,
//     req.body.length,
//     req.body.height,
//     req.body.hammer,
//     req.body.screws,
//     req.body.soilCuYd,
//   ];

//   queryText = `INSERT INTO "Materials" ("sqFt", "wood_width", "wood_length", "wood_height", "screws", "drill", "cuYd") VALUES ($1, $2, $3, $4, $5, $6, $7);`;
//   console.log(values);

//   pool
//     .query(queryText, values)
//     .then((result) => {
//       res.sendStatus(201);
//     })
//     .catch((error) => {
//       console.log("axios POST err", error);
//     });
// });

// values = [
//   req.body.carrot,
//   req.body.bellPepper,
//   req.body.corn,
//   req.body.peas,
//   req.body.beans,
//   req.body.lettuce,
// ];

// queryText = `INSERT INTO "Seeds" ("carrot_seeds", "bell_pepper_seeds", "corn_seeds", "pea_seeds", "greenbean_seeds", "lettuce_seeds") VALUES ($1, $2, $3, $4, $5, $6);`;

router.post("/", async (req, res) => {
  // console.log(req.body);

  const connection = await pool.connect();
  const user = req.user.id;
  // console.log(user);
  // console.log(req.body);
  // console.log(req.user);
  try {
    await connection.query("BEGIN");
    console.log(req.body);
  } catch (error) {
    console.log("SERVER POST ERR", error);
    res.sendStatus(500);
  }
});

module.exports = router;
