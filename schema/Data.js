const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        id: Number,
        name: String,
        vol: String
}
);



module.exports = mongoose.model("Data", DataSchema);