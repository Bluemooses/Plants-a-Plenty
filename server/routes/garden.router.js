const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * GET ALL GARDENS SPECIFIC TO USER
 */
router.get("/", rejectUnauthenticated, (req, res) => {
  const userID = req.user.id;
  console.log(userID);
  console.log(req.user.id);

  queryUserGardens = `SELECT "GardenBed".*, "Materials".*, "Seeds".* FROM "GardenBed"
JOIN "user" ON "user"."id" = "GardenBed"."user_id"
JOIN "Materials" ON "GardenBed"."id" = "Materials"."garden_bed_id"
JOIN "Seeds" ON "GardenBed"."id" = "Seeds"."garden_bed_id"
WHERE "user_id" = ${userID}
`;

  pool
    .query(queryUserGardens)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

/**
 * GET SPECIFIC USER GARDEN
 */

router.get(`/:id`, rejectUnauthenticated, (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  let id = req.params.id;
  // id = req.body.
  queryUserGardens = queryUserGardens = `SELECT "GardenBed".*, "Materials".*, "Seeds".* FROM "GardenBed"
  JOIN "user" ON "user"."id" = "GardenBed"."user_id"
  JOIN "Materials" ON "GardenBed"."id" = "Materials"."garden_bed_id"
  JOIN "Seeds" ON "GardenBed"."id" = "Seeds"."garden_bed_id"
  WHERE "GardenBed"."id" = ${id}`;

  pool
    .query(queryUserGardens)
    .then((result) => {
      res.send(result.rows);
      console.log(result.rows);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

/**
 * POST USER GARDEN INTO DB
 */
router.post("/create-garden", rejectUnauthenticated, async (req, res, next) => {
  const connection = await pool.connect();
  try {
    console.log(req.user.id);
    userID = req.user.id;

    await connection.query("BEGIN");
    // CREATE GARDEN BED ENTRY
    const sqlAddUserGardenBed = `INSERT INTO "GardenBed" ("user_id") VALUES ($1) RETURNING "id";`;
    const result = await connection.query(sqlAddUserGardenBed, [userID]);

    // CREATE LINK BETWEEN GARDEN BED AND USER
    const gardenId = result.rows[0].id;
    console.log(req.body.seedCount.carrot);

    // DEFINES MATERIALS
    materialValues = [
      req.body.materials.sqFt,
      req.body.materials.width,
      req.body.materials.length,
      req.body.materials.height,
      req.body.materials.hammer,
      req.body.materials.screws,
      req.body.materials.soilCuYd,
      gardenId,
    ];

    // MATERIAL QUERY
    const sqlMaterialQuery = `INSERT INTO "Materials" ("sqFt", "wood_width", "wood_length", "wood_height", "hammer", "screws", "soil", "garden_bed_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
    const result2 = await connection.query(sqlMaterialQuery, [
      materialValues[0],
      materialValues[1],
      materialValues[2],
      materialValues[3],
      materialValues[4],
      materialValues[5],
      materialValues[6],
      materialValues[7],
    ]); //END MATERIALS POST

    //DEFINES SEED COUNTS
    seedValues = [
      req.body.seedCount.carrot,
      req.body.seedCount.bellPepper,
      req.body.seedCount.corn,
      req.body.seedCount.peas,
      req.body.seedCount.beans,
      req.body.seedCount.lettuce,
      gardenId,
    ];

    // SEEDS QUERY
    const sqlSeedQuery = `INSERT INTO "Seeds" ("carrot_seeds", "bell_pepper_seeds", "corn_seeds", "pea_seeds", "greenbean_seeds", "lettuce_seeds", "garden_bed_id") VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    const result3 = await connection.query(sqlSeedQuery, [
      seedValues[0],
      seedValues[1],
      seedValues[2],
      seedValues[3],
      seedValues[4],
      seedValues[5],
      seedValues[6],
    ]); //ENDS SEEDS POST

    console.log(req.body);
    //ALL QUERIES SUCCESSFUL, COMMIT CHANGES.
    await connection.query("COMMIT");
    console.log("Success!");
    res.sendStatus(201);
  } catch (error) {
    //ROLLBACK ANY CHANGES ON ERR SO DB ISN'T FOO-BAR'D
    await connection.query("ROLLBACK");
    console.log("ERROR IN SERVER GARDENBED POST", error);
    res.sendStatus(500);
  } finally {
    //GAME OVER, RELEASE CONNECTION.  IT WAS FUN WHILE IT LASTED
    connection.release();
  }
});

router.delete("/:id", rejectUnauthenticated, async (req, res) => {
  const connection = await pool.connect();
  console.log(req.params);
  userID = req.user.id;
  let gardenBedID = req.params.id;
  try {
    await connection.query("BEGIN");

    const sqlDelete2 = `DELETE FROM "Materials" WHERE "garden_bed_id"=$1;`;
    const sqlDelete3 = `DELETE FROM "Seeds" WHERE "garden_bed_id"=$1;`;
    const sqlDelete = `DELETE FROM "GardenBed" WHERE id=$1 AND "user_id"=$2;`;

    const materialsResult = await connection.query(sqlDelete2, [gardenBedID]);
    const seedsResult = await connection.query(sqlDelete3, [gardenBedID]);
    const gardenBedResult = await connection.query(sqlDelete, [
      gardenBedID,
      userID,
    ]);

    await connection.query("COMMIT");
    console.log("success");
    res.sendStatus(201);
  } catch (error) {
    await connection.query("ROLLBACK");
    console.log("error in server side self report response DELETE", error);
    res.sendStatus(500);
  } finally {
    connection.release();
  }
});

router.put("/:id", rejectUnauthenticated, (req, res) => {
  console.log(req.body);
  console.log(req.body.garden_bed_id);
  userID = req.user.id;

  seedValues = [
    req.body.bellPepper,
    req.body.carrot,
    req.body.beans,
    req.body.lettuce,
    req.body.corn,
    req.body.peas,
    req.body.garden_bed_id,
  ];

  const sqlUpdateSeeds = `UPDATE "Seeds" 
    SET ("bell_pepper_seeds", "carrot_seeds", "greenbean_seeds", "lettuce_seeds", "corn_seeds", "pea_seeds") = ($1, $2, $3, $4, $5, $6) WHERE "garden_bed_id"=$7;`;

  pool
    .query(sqlUpdateSeeds, [
      seedValues[0],
      seedValues[1],
      seedValues[2],
      seedValues[3],
      seedValues[4],
      seedValues[5],
      seedValues[6],
    ])
    .then((result) => {
      console.log(result);
      // res.send(result.rows);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("ERROR IN SERVER PUT", error);
      res.sendStatus(500);
    });
});

router.put("/reset/:id", rejectUnauthenticated, (req, res) => {
  console.log(req.body);
  console.log(req.body.response);

  seedValues = [0, 0, 0, 0, 0, 0, req.body.payload];

  const sqlUpdateSeeds = `UPDATE "Seeds" 
    SET ("bell_pepper_seeds", "carrot_seeds", "greenbean_seeds", "lettuce_seeds", "corn_seeds", "pea_seeds") = ($1, $2, $3, $4, $5, $6) WHERE "garden_bed_id"=$7;`;

  pool
    .query(sqlUpdateSeeds, [
      seedValues[0],
      seedValues[1],
      seedValues[2],
      seedValues[3],
      seedValues[4],
      seedValues[5],
      seedValues[6],
    ])
    .then((result) => {
      console.log(result);
      // res.send(result.rows);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("ERROR IN SERVER PUT", error);
      res.sendStatus(500);
    });
});
module.exports = router;
