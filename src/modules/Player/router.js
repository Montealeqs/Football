
import express from "express";
import { CountrolerPlayer } from "./countrol";

const router = express.Router()

router.get("/", CountrolerPlayer.getData)
router.get("/sortPlayer", CountrolerPlayer.getDataPlayers)
router.get("/sortCountry/:id", CountrolerPlayer.sortCountry)
router.get("/sortTeam/:id", CountrolerPlayer.sortTeam)
router.post("/add", CountrolerPlayer.createData)
router.put("/chenj/:id", CountrolerPlayer.updateData)
router.delete("/delete/:id", CountrolerPlayer.delete)
router.post("/addMany", CountrolerPlayer.createDataMany)
export default router;