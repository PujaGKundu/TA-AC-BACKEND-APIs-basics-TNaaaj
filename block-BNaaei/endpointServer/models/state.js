var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var stateSchema = new Schema(
  {
    name: String,
    country: [{ type: Schema.Types.ObjectId, ref: "Country" }],
    population: Number,
    area: Number,
    neighbouring_states: [{ type: Schema.Types.ObjectId, ref: "State" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("State", stateSchema);
