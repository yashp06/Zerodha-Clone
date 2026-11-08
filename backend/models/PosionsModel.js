const {model} = require("mongoose")

const {PositionsSchema} = require("../schemas/PostionsSchema")

const PositionsModule = new model("postion",PositionsSchema)

module.exports = {PositionsModule}