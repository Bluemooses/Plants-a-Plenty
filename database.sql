--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.3

-- Started on 2020-07-18 12:21:55

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 207 (class 1259 OID 26813)
-- Name: GardenBed; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."GardenBed" (
    id integer NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public."GardenBed" OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 26825)
-- Name: GardenBed_Veggies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."GardenBed_Veggies" (
    id integer NOT NULL,
    veggies_id integer NOT NULL,
    "GardenBed_id" integer NOT NULL
);


ALTER TABLE public."GardenBed_Veggies" OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 26823)
-- Name: GardenBed_Veggies_GardenBed_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."GardenBed_Veggies_GardenBed_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."GardenBed_Veggies_GardenBed_id_seq" OWNER TO postgres;

--
-- TOC entry 2885 (class 0 OID 0)
-- Dependencies: 210
-- Name: GardenBed_Veggies_GardenBed_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."GardenBed_Veggies_GardenBed_id_seq" OWNED BY public."GardenBed_Veggies"."GardenBed_id";


--
-- TOC entry 208 (class 1259 OID 26819)
-- Name: GardenBed_Veggies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."GardenBed_Veggies_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."GardenBed_Veggies_id_seq" OWNER TO postgres;

--
-- TOC entry 2886 (class 0 OID 0)
-- Dependencies: 208
-- Name: GardenBed_Veggies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."GardenBed_Veggies_id_seq" OWNED BY public."GardenBed_Veggies".id;


--
-- TOC entry 209 (class 1259 OID 26821)
-- Name: GardenBed_Veggies_veggies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."GardenBed_Veggies_veggies_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."GardenBed_Veggies_veggies_id_seq" OWNER TO postgres;

--
-- TOC entry 2887 (class 0 OID 0)
-- Dependencies: 209
-- Name: GardenBed_Veggies_veggies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."GardenBed_Veggies_veggies_id_seq" OWNED BY public."GardenBed_Veggies".veggies_id;


--
-- TOC entry 206 (class 1259 OID 26811)
-- Name: GardenBed_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."GardenBed_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."GardenBed_id_seq" OWNER TO postgres;

--
-- TOC entry 2888 (class 0 OID 0)
-- Dependencies: 206
-- Name: GardenBed_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."GardenBed_id_seq" OWNED BY public."GardenBed".id;


--
-- TOC entry 213 (class 1259 OID 26835)
-- Name: Materials; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Materials" (
    id integer NOT NULL,
    wood_length real,
    wood_height real,
    wood_width real,
    hammer boolean,
    screws boolean,
    soil real,
    seeds integer,
    garden_bed_id integer NOT NULL,
    "sqFt" real
);


ALTER TABLE public."Materials" OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 26833)
-- Name: Materials_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Materials_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Materials_id_seq" OWNER TO postgres;

--
-- TOC entry 2889 (class 0 OID 0)
-- Dependencies: 212
-- Name: Materials_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Materials_id_seq" OWNED BY public."Materials".id;


--
-- TOC entry 215 (class 1259 OID 26845)
-- Name: Seeds; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Seeds" (
    id integer NOT NULL,
    bell_pepper_seeds integer,
    carrot_seeds integer,
    greenbean_seeds integer,
    lettuce_seeds integer,
    corn_seeds integer,
    pea_seeds integer,
    garden_bed_id integer NOT NULL
);


ALTER TABLE public."Seeds" OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 26843)
-- Name: Seeds_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Seeds_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Seeds_id_seq" OWNER TO postgres;

--
-- TOC entry 2890 (class 0 OID 0)
-- Dependencies: 214
-- Name: Seeds_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Seeds_id_seq" OWNED BY public."Seeds".id;


--
-- TOC entry 205 (class 1259 OID 26802)
-- Name: Veggies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Veggies" (
    id integer NOT NULL,
    seed_spacing integer NOT NULL,
    yield real NOT NULL,
    img character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    timing character varying(255) NOT NULL,
    veggie_name character varying(255) NOT NULL,
    row_spacing integer NOT NULL,
    sq_in_per_seed integer NOT NULL
);


ALTER TABLE public."Veggies" OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 26800)
-- Name: Veggies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Veggies_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Veggies_id_seq" OWNER TO postgres;

--
-- TOC entry 2891 (class 0 OID 0)
-- Dependencies: 204
-- Name: Veggies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Veggies_id_seq" OWNED BY public."Veggies".id;


--
-- TOC entry 203 (class 1259 OID 26789)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying(80) NOT NULL,
    password character varying(1000) NOT NULL
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 26787)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO postgres;

--
-- TOC entry 2892 (class 0 OID 0)
-- Dependencies: 202
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- TOC entry 2725 (class 2604 OID 26816)
-- Name: GardenBed id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."GardenBed" ALTER COLUMN id SET DEFAULT nextval('public."GardenBed_id_seq"'::regclass);


--
-- TOC entry 2726 (class 2604 OID 26828)
-- Name: GardenBed_Veggies id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."GardenBed_Veggies" ALTER COLUMN id SET DEFAULT nextval('public."GardenBed_Veggies_id_seq"'::regclass);


--
-- TOC entry 2727 (class 2604 OID 26829)
-- Name: GardenBed_Veggies veggies_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."GardenBed_Veggies" ALTER COLUMN veggies_id SET DEFAULT nextval('public."GardenBed_Veggies_veggies_id_seq"'::regclass);


--
-- TOC entry 2728 (class 2604 OID 26830)
-- Name: GardenBed_Veggies GardenBed_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."GardenBed_Veggies" ALTER COLUMN "GardenBed_id" SET DEFAULT nextval('public."GardenBed_Veggies_GardenBed_id_seq"'::regclass);


--
-- TOC entry 2729 (class 2604 OID 26838)
-- Name: Materials id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Materials" ALTER COLUMN id SET DEFAULT nextval('public."Materials_id_seq"'::regclass);


--
-- TOC entry 2730 (class 2604 OID 26848)
-- Name: Seeds id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Seeds" ALTER COLUMN id SET DEFAULT nextval('public."Seeds_id_seq"'::regclass);


--
-- TOC entry 2724 (class 2604 OID 26805)
-- Name: Veggies id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Veggies" ALTER COLUMN id SET DEFAULT nextval('public."Veggies_id_seq"'::regclass);


--
-- TOC entry 2723 (class 2604 OID 26792)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 2740 (class 2606 OID 26832)
-- Name: GardenBed_Veggies GardenBed_Veggies_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."GardenBed_Veggies"
    ADD CONSTRAINT "GardenBed_Veggies_pk" PRIMARY KEY (id);


--
-- TOC entry 2738 (class 2606 OID 26818)
-- Name: GardenBed GardenBed_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."GardenBed"
    ADD CONSTRAINT "GardenBed_pk" PRIMARY KEY (id);


--
-- TOC entry 2742 (class 2606 OID 26842)
-- Name: Materials Materials_garden_bed_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Materials"
    ADD CONSTRAINT "Materials_garden_bed_id_key" UNIQUE (garden_bed_id);


--
-- TOC entry 2744 (class 2606 OID 26840)
-- Name: Materials Materials_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Materials"
    ADD CONSTRAINT "Materials_pk" PRIMARY KEY (id);


--
-- TOC entry 2746 (class 2606 OID 26852)
-- Name: Seeds Seeds_garden_bed_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Seeds"
    ADD CONSTRAINT "Seeds_garden_bed_id_key" UNIQUE (garden_bed_id);


--
-- TOC entry 2748 (class 2606 OID 26850)
-- Name: Seeds Seeds_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Seeds"
    ADD CONSTRAINT "Seeds_pk" PRIMARY KEY (id);


--
-- TOC entry 2736 (class 2606 OID 26810)
-- Name: Veggies Veggies_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Veggies"
    ADD CONSTRAINT "Veggies_pk" PRIMARY KEY (id);


--
-- TOC entry 2732 (class 2606 OID 26797)
-- Name: user user_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pk PRIMARY KEY (id);


--
-- TOC entry 2734 (class 2606 OID 26799)
-- Name: user user_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_username_key UNIQUE (username);


--
-- TOC entry 2750 (class 2606 OID 26858)
-- Name: GardenBed_Veggies GardenBed_Veggies_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."GardenBed_Veggies"
    ADD CONSTRAINT "GardenBed_Veggies_fk0" FOREIGN KEY (veggies_id) REFERENCES public."Veggies"(id);


--
-- TOC entry 2751 (class 2606 OID 26863)
-- Name: GardenBed_Veggies GardenBed_Veggies_fk1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."GardenBed_Veggies"
    ADD CONSTRAINT "GardenBed_Veggies_fk1" FOREIGN KEY ("GardenBed_id") REFERENCES public."GardenBed"(id);


--
-- TOC entry 2749 (class 2606 OID 26853)
-- Name: GardenBed GardenBed_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."GardenBed"
    ADD CONSTRAINT "GardenBed_fk0" FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- TOC entry 2752 (class 2606 OID 26868)
-- Name: Materials Materials_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Materials"
    ADD CONSTRAINT "Materials_fk0" FOREIGN KEY (garden_bed_id) REFERENCES public."GardenBed"(id);


--
-- TOC entry 2753 (class 2606 OID 26873)
-- Name: Seeds Seeds_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Seeds"
    ADD CONSTRAINT "Seeds_fk0" FOREIGN KEY (garden_bed_id) REFERENCES public."GardenBed"(id);