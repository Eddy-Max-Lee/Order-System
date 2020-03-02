var formidable = require("formidable");
var fs = require("fs");
var mainctrl = require("./controllers/mainctrl.js");

export.save = (req,res)=>{
var form = new formidable.IncomingForm();//?

//用formidable插件識別表單
form.parse(req,(err,fields)=>{
console.log(fields);
fs.appendFile("./public/order.txt",JSON.stringify(fields),function(err){
	if(err){
		res.send("-1");		
	}else{
		res.send("1");
	}
	
});	



});




}