const Url = require("../Models/Url.js");
const shortid = require("shortid");

const shortUrl = async (req, res) => {
  const longUrl = req.body.longUrl;
  const shortCode = shortid.generate();

  const shortUrl = `http://localhost:1000/${shortCode}`;

  const newUrl = new Url({ shortCode, longUrl });
  await newUrl.save();

  console.log("short saved =", newUrl);

  res.render("index.ejs", { shortUrl });
};

 const getOriginalUrl = async(req,res)=>{
  const shortCode = req.params.shortCode

  const originalUrl = await Url.findOne({shortCode})
  if(originalUrl){
    res.redirect(originalUrl.longUrl)
  }else{
    res.json({msg:"invalid short"})
  }
 
}

module.exports = { getOriginalUrl,shortUrl };
