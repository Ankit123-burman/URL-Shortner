const mongoose = require("mongoose"); // ✅ fix typo here
const { shortUrl } = require("../Controllers/Url"); // ✅ fine if used

const urlSchema = new mongoose.Schema({
    shortCode: String,
    longUrl: String
});

const Url = mongoose.model("shortUrl", urlSchema);

module.exports = Url; // ✅ CommonJS export
