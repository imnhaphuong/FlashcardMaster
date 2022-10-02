const mongoose = require('mongoose')
const UnitSchema = new mongoose.Schema({
    unit_name: String,
    username: String,

})


mongoose.model("unit", UnitSchema)