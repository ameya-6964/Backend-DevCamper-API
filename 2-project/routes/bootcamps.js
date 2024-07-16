const router = require("express").Router();
const { getBootcamps, getSingleBootcamp, deleteBootcamp, updateBootcamp, createBootcamp } = require("../controllers/bootcamps")


router.get("/", getBootcamps)

router.post("/", createBootcamp)

router.get("/:id", getSingleBootcamp)

router.put("/:id", updateBootcamp)

router.delete("/:id", deleteBootcamp)


module.exports = router

