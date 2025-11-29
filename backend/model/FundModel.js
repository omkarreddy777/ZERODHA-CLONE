const mongoose = require("mongoose");

const FundSchema = new mongoose.Schema({
  userId: String,
  availableMargin: { type: Number, default: 0 },
  usedMargin: { type: Number, default: 0 },
  availableCash: { type: Number, default: 0 },
  openingBalance: { type: Number, default: 0 },
  commodityAccount: { type: Boolean, default: false }
});

module.exports.FundModel = mongoose.model("funds", FundSchema);
