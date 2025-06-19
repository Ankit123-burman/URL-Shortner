const mongoose = require("mongoose"); // ✅ fix typo here


const urlSchema = new mongoose.Schema({
    shortCode: String,
    longUrl: String
});

const Url = mongoose.model("shortUrl", urlSchema);

module.exports = Url; // ✅ CommonJS export
