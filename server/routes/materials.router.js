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
router.post("/", (req, res) => {
  values = [
    req.body.carrot,
    req.body.bellPepper,
    req.body.corn,
    req.body.peas,
    req.body.beans,
    req.body.lettuce,
  ];

  const queryText = `INSERT INTO "Seeds" ("carrot_seeds", "bell_pepper_seeds", "corn_seeds", "pea_seeds", "greenbean_seeds", "lettuce_seeds") VALUES ($1, $2, $3, $4, $5, $6);`;

  pool
    .query(queryText, values)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("axios POST err", error);
    });
});

// router.post("/", async (req, res) => {
//   // console.log(req.body);

//   const connection = await pool.connect();
//   const user = req.user.id;

//   try {
//     await connection.query("BEGIN");

//     const queryText1 =
//       (`INSERT INTO "Seeds" ("carrot_seeds", "bell_pepper_seeds", "corn_seeds", "pea_seeds", "greenbean_seeds", "lettuce_seeds") VALUES ($1, $2, $3, $4, $5, $6)
//     RETURNING id;`,
//       [
//         carrot_seeds,
//         bell_pepper_seeds,
//         corn_seeds,
//         pea_seeds,
//         greenbean_seeds,
//         lettuce_seeds,
//       ]);
//     const seedsID = queryText1.row[0].id;

//     const queryText2 = `INSERT INTO "Materials" ("sqFt", "wood_width", "wood_length", "wood_height", "screws", "drill", "cuYd") VALUES ($1, $2, $3, $4, $5, $6, $7);`;
//   } catch (error) {
//     console.log("SERVER POST ERR", error);
//     res.sendStatus(500);
//   }
// });

//  values = [
//    req.body.sqFt,
//    req.body.width,
//    req.body.length,
//    req.body.height,
//    req.body.hammer,
//    req.body.screws,
//    req.body.soilCuYd,
//  ];

module.exports = router;
