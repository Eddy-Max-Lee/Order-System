var formidable = require("formidable");
var fs = require("fs");
//npm i formidable

exports.save = function(req,res){
var form = new formidable.IncomingForm();//?

//用formidable插件識別表單
form.parse(req,(err,fields)=>{
console.log(fields);
fs.appendFile("./viewer/order.txt",JSON.stringify(fields)+"\r\n",function(err,fields,){
	if(err){
		res.send("-1");		
	}else{
		res.send("1");
	}
	
});	



});




}