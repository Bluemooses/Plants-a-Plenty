CREATE TABLE "user" (
	"id" serial NOT NULL,
	"username" varchar(80) NOT NULL UNIQUE,
	"password" varchar(1000) NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Veggies" (
	"ID" serial NOT NULL,
	"spacing" integer NOT NULL,
	"yield" integer NOT NULL,
	"img" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"timing" varchar(255) NOT NULL,
	"veggie_name" varchar(255) NOT NULL,
	"row_spacing" integer NOT NULL,
	"sq_in_per_seed" integer NOT NULL,
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
	"user_id" serial NOT NULL,
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
	"soil" integer NOT NULL,
	"seeds" integer NOT NULL,
	"garden_bed_id" integer NOT NULL UNIQUE,
	CONSTRAINT "Materials_pk" PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Seeds" (
	"ID" serial NOT NULL,
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
	"garden_bed_id" integer NOT NULL UNIQUE,
	CONSTRAINT "Seeds_pk" PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "GardenBed" ADD CONSTRAINT "GardenBed_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");

ALTER TABLE "GardenBed_Veggies" ADD CONSTRAINT "GardenBed_Veggies_fk0" FOREIGN KEY ("veggies_id") REFERENCES "Veggies"("ID");
ALTER TABLE "GardenBed_Veggies" ADD CONSTRAINT "GardenBed_Veggies_fk1" FOREIGN KEY ("GardenBed_id") REFERENCES "GardenBed"("ID");

ALTER TABLE "Materials" ADD CONSTRAINT "Materials_fk0" FOREIGN KEY ("garden_bed_id") REFERENCES "GardenBed"("ID");

ALTER TABLE "Seeds" ADD CONSTRAINT "Seeds_fk0" FOREIGN KEY ("garden_bed_id") REFERENCES "GardenBed"("ID");
