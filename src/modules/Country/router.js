
import express from "express";
import { CountrolerCountry } from "./countrol";
// import { addCountry, deleteCountry, getCountry, putCountry } from "./countrol";

const router = express.Router()

router.get("/",CountrolerCountry.getData)
router.post("/add",CountrolerCountry.createData)
router.put("/chenj/:id",CountrolerCountry.updateData)
router.delete("/delete/:id",CountrolerCountry.delete)

// router.get("/", getCountry)
// router.post("/add", addCountry)
// router.put("/chenj/:id",putCountry)
// router.delete("/delete/:id",deleteCountry)
export default router;