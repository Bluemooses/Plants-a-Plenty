
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
	"id" serial NOT NULL,
	"username" varchar(255) NOT NULL UNIQUE,
	"password" varchar(1000) NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Veggies" (
	"ID" integer NOT NULL,
	"seed_spacing" integer NOT NULL,
	"yield" integer NOT NULL,
	"img" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"timing" varchar(255) NOT NULL,
	"veggie_name" varchar(255) NOT NULL,
	"row_spacing" integer NOT NULL,
	CONSTRAINT "Veggies_pk" PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "GardenBed" (
	"ID" serial NOT NULL,
	"veggie_count" serial NOT NULL,
	"sq_ft" serial NOT NULL,
	"sq_in" serial NOT NULL,
	"total_yield" serial NOT NULL,
	"user_id" integer NOT NULL,
	CONSTRAINT "GardenBed_pk" PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "GardenBed_Veggies" (
	"ID" serial NOT NULL,
	"veggies_id" serial NOT NULL,
	"GardenBed_id" serial NOT NULL,
	CONSTRAINT "GardenBed_Veggies_pk" PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Materials" (
	"ID" serial NOT NULL,
	"wood_length" integer NOT NULL,
	"wood_height" integer NOT NULL,
	"wood_width" integer NOT NULL,
	"hammer" BOOLEAN NOT NULL,
	"screws" BOOLEAN NOT NULL,
	"soil-cuYd" integer NOT NULL,
	CONSTRAINT "Materials_pk" PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Seeds" (
	"ID" integer NOT NULL,
	"beet_seeds" integer NOT NULL,
	"bell_pepper_seeds" integer NOT NULL,
	"carrot_seeds" integer NOT NULL,
	"cucumber_seeds" integer NOT NULL,
	"greenbean_seeds" integer NOT NULL,
	"lettuce_seeds" integer NOT NULL,
	"onion_seeds" integer NOT NULL,
	"potato_seeds" integer NOT NULL,
	"sweet_potato_seeds" integer NOT NULL,
	"spinach_seeds" integer NOT NULL,
	"tomato_seeds" integer NOT NULL,
	"swiss_chard_seeds" integer NOT NULL,
	"corn_seeds" integer NOT NULL,
	"pea_seeds" integer NOT NULL,
	"summer_squash_seeds" integer NOT NULL,
	"winter_squash_seeds" integer NOT NULL,
	CONSTRAINT "Seeds_pk" PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "UserGarden" (
	"GardenBed_Materials" integer NOT NULL,
	"garden_bed_id" integer NOT NULL,
	"materials_id" integer NOT NULL,
	CONSTRAINT "UserGarden_pk" PRIMARY KEY ("GardenBed_Materials")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "GardenBed_Seeds" (
	"seeds_id" integer NOT NULL,
	"garden_bed_id" integer NOT NULL,
	"ID" serial NOT NULL,
	CONSTRAINT "GardenBed_Seeds_pk" PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "GardenBed" ADD CONSTRAINT "GardenBed_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");

ALTER TABLE "GardenBed_Veggies" ADD CONSTRAINT "GardenBed_Veggies_fk0" FOREIGN KEY ("veggies_id") REFERENCES "Veggies"("ID");
ALTER TABLE "GardenBed_Veggies" ADD CONSTRAINT "GardenBed_Veggies_fk1" FOREIGN KEY ("GardenBed_id") REFERENCES "GardenBed"("ID");



ALTER TABLE "UserGarden" ADD CONSTRAINT "UserGarden_fk0" FOREIGN KEY ("garden_bed_id") REFERENCES "GardenBed"("ID");
ALTER TABLE "UserGarden" ADD CONSTRAINT "UserGarden_fk1" FOREIGN KEY ("materials_id") REFERENCES "Materials"("ID");

ALTER TABLE "GardenBed_Seeds" ADD CONSTRAINT "GardenBed_Seeds_fk0" FOREIGN KEY ("seeds_id") REFERENCES "Seeds"("ID");
ALTER TABLE "GardenBed_Seeds" ADD CONSTRAINT "GardenBed_Seeds_fk1" FOREIGN KEY ("garden_bed_id") REFERENCES "GardenBed"("ID");

SELECT * FROM "Veggies";