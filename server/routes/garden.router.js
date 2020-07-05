const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {});

/**
 * POST route template
 */
router.post("/create-garden", async (req, res, next) => {
  // console.log(req.body.payload);
  // console.log(req.user.id);
  const connection = await pool.connect();
  try {
    console.log(req.body);
    userID = req.user.id;

    await connection.query("BEGIN");
    // console.log(userID);
    // CREATE GARDEN BED ENTRY
    const sqlAddUserGardenBed = `INSERT INTO "GardenBed" ("user_id") VALUES ($1) RETURNING "id";`;
    const result = await connection.query(sqlAddUserGardenBed, [userID]);
    // console.log(result);
    // console.log(result.rows);

    // CREATE LINK BETWEEN GARDEN BED AND USER
    const gardenId = result.rows[0].id;

    values = [
      req.body.sqFt,
      req.body.width,
      req.body.length,
      req.body.height,
      req.body.hammer,
      req.body.screws,
      req.body.soilCuYd,
      gardenId,
    ];

    const sqlMaterialQuery = `INSERT INTO "Materials" ("sqFt", "wood_width", "wood_length", "wood_height", "hammer", "screws", "soil", "garden_bed_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
    const result2 = await connection.query(sqlMaterialQuery, [
      values[0],
      values[1],
      values[2],
      values[3],
      values[4],
      values[5],
      values[6],
      values[7],
    ]);

    seedValues = [
      req.body.carrot,
      req.body.bellPepper,
      req.body.corn,
      req.body.peas,
      req.body.beans,
      req.body.lettuce,
      gardenId,
    ];

    const sqlSeedQuery = `INSERT INTO "Seeds" ("carrot_seeds", "bell_pepper_seeds", "corn_seeds", "pea_seeds", "greenbean_seeds", "lettuce_seeds", "garden_bed_id") VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    const result3 = await connection.query(sqlSeedQuery, [
      seedValues[0],
      seedValues[1],
      seedValues[2],
      seedValues[3],
      seedValues[4],
      seedValues[5],
      seedValues[6],
    ]);

    await connection.query("COMMIT");
    console.log("Success!");
    res.sendStatus(201);
  } catch (error) {
    await connection.query("ROLLBACK");
    console.log("ERROR IN SERVER GARDENBED POST", error);
    res.sendStatus(500);
  } finally {
    connection.release();
  }
});

module.exports = router;
