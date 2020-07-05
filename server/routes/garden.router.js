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
router.post("/create-garden", (req, res, next) => {
  //   console.log(req.body.user);
  console.log(req.body.payload);
  userID = req.body.payload;

  //   console.log(next);
  const queryText = `INSERT INTO "GardenBed" ("name") VALUES ($1) RETURNING "id";`;
  pool
    .query(queryText, [userID])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

module.exports = router;
