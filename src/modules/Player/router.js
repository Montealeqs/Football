
import express from "express";
import { CountrolerPlayer } from "./countrol";
// import {  addPlayer, deletePlayer, getCountryPlayer, getPlayer, getTeamPlayer, putPlayer } from "./countrol";

const router = express.Router()

router.get("/",CountrolerPlayer.getData)
router.post("/add",CountrolerPlayer.createData)
router.put("/chenj/:id",CountrolerPlayer.updateData)
router.delete("/delete/:id",CountrolerPlayer.delete)

// router.get("/", getPlayer)
// router.get("/TeamPlayer/:teamId",getTeamPlayer)
// router.get("/CountryPlayer/:countryId",getCountryPlayer)
// router.post("/add", addPlayer)
// router.put("/chenj/:id",putPlayer)
// router.delete("/delete/:id",deletePlayer)
export default router;