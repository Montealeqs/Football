import express from "express";
import { CountrolerTeam } from "./countrol";
// import {  getTeam, addTeam, putTeam, deleteTeam } from "./countrol";

const router = express.Router()

router.get("/",CountrolerTeam.getData)
router.post("/add",CountrolerTeam.createData)
router.put("/chenj/:id",CountrolerTeam.updateData)
router.delete("/delete/:id",CountrolerTeam.delete)
// router.get("/", getTeam)
// router.post("/add", addTeam)
// router.put("/chenj/:id",putTeam)
// router.delete("/delete/:id",deleteTeam)
export default router;