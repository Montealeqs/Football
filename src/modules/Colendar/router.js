
import express from "express";
import { CountrolerColendar } from "./countrol";
// import {  getColendar, addColendar, putColendar, deleteColendar } from "./countrol";

const router = express.Router()
router.get("/",CountrolerColendar.getData)
router.post("/add",CountrolerColendar.createData)
router.put("/chenj/:id",CountrolerColendar.updateData)
router.delete("/delete/:id",CountrolerColendar.delete)

// router.get("/", getColendar)
// router.post("/add", addColendar)
// router.put("/chenj/:id",putColendar)
// router.delete("/delete/:id",deleteColendar)
export default router;