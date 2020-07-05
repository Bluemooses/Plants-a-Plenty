const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  queryText = `SELECT * FROM "GardenBed" WHERE ("user_id") = $1`;
  userID = req.user.id;
  pool.query();
});

/**
 * POST route template
 */
router.post("/create-garden", (req, res) => {
  userID = req.user.id;
  console.log(userID);
  const sqlAddUserGardenBed = `INSERT INTO "GardenBed" ("user_id") VALUES ($1) RETURNING "id";`;
  pool
    .query(sqlAddUserGardenBed, [userID])
    .then((result) => {
      console.log(result);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("GARDEN POST ERR", error);
    });
});

module.exports = router;
