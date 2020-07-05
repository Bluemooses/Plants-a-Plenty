// const express = require("express");
// const pool = require("../modules/pool");
// const router = express.Router();

// /**
//  * GET route template
//  */
// router.get("/", (req, res) => {});

// /**
//  * POST route template
//  */
// router.post("/create-garden", async (req, res, next) => {
//   const connection = await pool.connect();
//   try {
//     userID = req.user.id;

//     await connection.query("BEGIN");

//     const sqlAddUserGardenBed = `INSERT INTO "GardenBed" ("name") VALUES ($1) RETURNING "id";`;
//     const result = await connection.query(sqlAddUserGardenBed, [userID]);

//     // CREATE LINK BETWEEN GARDEN BED AND USER
//     const gardenId = result.rows[0].id;
//     // console.log(gardenId);
//     // console.log(gardenId);
//     const sqlEstablishGardenLink = `INSERT INTO "GardenBed_user" ("GardenBed_id", "user_id") VALUES($1, $2) RETURNING "id";`;
//     const established = await connection.query(sqlEstablishGardenLink, [
//       gardenId,
//       userID,
//     ]);

//     // EXACT ID WHERE USER IS CONNECTED TO GARDEN BED.
//     completelyLinkedGardenId = established.rows[0].id;
//     console.log(completelyLinkedGardenId);

//     // console.log(result2);
//     await connection.query("COMMIT");
//     res.sendStatus(201);
//   } catch (error) {
//     await connection.query("ROLLBACK");
//     console.log("ERROR IN SERVER GARDENBED POST", error);
//     res.sendStatus(500);
//   } finally {
//     connection.release();
//   }
// });

// module.exports = router;
