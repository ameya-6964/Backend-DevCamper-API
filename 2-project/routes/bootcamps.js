const router = require("express").Router();


router.get("/bootcamps", (req, res) => {
    res.status(200).json({ success: true, message: "Showing All Bootcamps" })
})

router.get("/bootcamps/:id", (req, res) => {
    let id = req.params.id
    res.status(200).json({ success: true, message: `Bootcamp With ${id} Fetched`})
})

router.post("/bootcamps", (req, res) => {
    res.status(200).json({ success: true, message: "Adding New Bootcamp" })
})

router.put("/bootcamps/:id", (req, res) => {
    let id = req.params.id
    res.status(200).json({ success: true, message: `Bootcamp With ${id} Updated`})
})

router.delete("/bootcamps/:id", (req, res) => {
    let id = req.params.id
    res.status(200).json({ success: true, message: `Bootcamp With ${id} Deleted`})
})


module.exports = router

