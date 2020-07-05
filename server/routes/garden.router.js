const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  const queryText = `SELECT `;
});

/**
 * POST route template
 */
router.post("/create-garden", async (req, res, next) => {
  //   console.log(req.body.user);
  console.log(req.body.payload);
  const connection = await pool.connect();
  userID = req.body.payload;
  try {
    await connection.query("BEGIN");
    //   console.log(next);
    const sqlAddUserGardenBed = `INSERT INTO "GardenBed" ("name") VALUES ($1) RETURNING "id";`;
    const result = await connection.query(sqlAddUserGardenBed, [userID]);
    console.log(result);
    console.log(result.rows);
    const gardenId = result.rows[0].id;
    console.log(gardenId);
    const sqlEstablishGardenLink = `INSERT INTO "GardenBed_user" ("GardenBed_id", "user_id") VALUES($1, $2) RETURNING "id";`;
    const established = await connection.query(sqlEstablishGardenLink, [
      gardenId,
      userID,
    ]);
    completelyLinkedGardenId = established.rows[0].id;

    // console.log(result2);
    await connection.query("COMMIT");
    console.log("HYPE");
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
