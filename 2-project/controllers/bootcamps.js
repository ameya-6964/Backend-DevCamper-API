
//  @desc    GET ALL BOOTCAMPS
//  @route   GET /api/v1/bootcamps 
exports.getBootcamps = (req, res) => {
    res.status(200).json({ success: true, message: "Showing All " })
}

//  @desc    GET SINGLE BOOTCAMP
//  @route   GET /api/v1/bootcamps/:id
exports.getBootcamp = (req, res) => {
    let id = req.params.id
    res.status(200).json({ success: true, message: `Bootcamp With ${id} Fetched`})
}

//  @desc    CREATE NEW BOOTCAMP
//  @route   POST /api/v1/bootcamps
exports.createBootcamp =(req, res) => {
    res.status(200).json({ success: true, message: "Added New Bootcamp" })
}

//  @desc    UPDATE SINGLE BOOTCAMP
//  @route   PUT /api/v1/bootcamps/:id
exports.updateBootcamp =(req, res) => {
    let id = req.params.id
    res.status(200).json({ success: true, message: `Bootcamp With ${id} Updated`})
}

//  @desc    DELETE SINGLE BOOTCAMP
//  @route   DELETE /api/v1/bootcamps/:id
exports.deleteBootcamp =  (req, res) => {
    let id = req.params.id
    res.status(200).json({ success: true, message: `Bootcamp With ${id} Deleted`})
}