const router = require("express").Router();


router.get("/bootcamps", (req, res) => {
    res.status(200).json({ success: true, message: "Showing All Bootcamps" })
})

router.get("/bootcamps/:id", (req, res) => {
    res.status(200).json({ success: true, message: "Get Single Bootcamp" })
})

router.post("/bootcamps", (req, res) => {
    res.status(200).json({ success: true, message: "Adding New Bootcamp" })
})

router.put("/bootcamps/:id", (req, res) => {
    res.status(200).json({ success: true, message: "Updating One Bootcamp" })
})

router.delete("/bootcamps/:id", (req, res) => {
    res.status(200).json({ success: true, message: "Deleting Single Bootcamp" })
})


module.exports = router

