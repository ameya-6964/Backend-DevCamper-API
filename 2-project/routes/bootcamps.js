const router = require("express").Router();
const { getBootcamps, getBootcamp, deleteBootcamp, updateBootcamp, createBootcamp } = require("../controllers/bootcamps")


router.route("/")
.get(getBootcamps)
.post(createBootcamp)


router.route("/:id")
.get(getBootcamp)
.put(updateBootcamp)
.delete(deleteBootcamp)


module.exports = router

