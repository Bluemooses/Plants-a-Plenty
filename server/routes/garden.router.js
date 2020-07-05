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
    //   console.log(next);
    const queryText = `INSERT INTO "GardenBed" ("name") VALUES ($1) RETURNING "id";`;

    pool.query(queryText, [userID]);
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
