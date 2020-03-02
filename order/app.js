var express = require("express");  
var app = express();
var fs = require("fs");
var multer  = require('multer');
var bodyParser = require('body-parser');
var mainctrl = require("./controllers/mainctrl.js");
var formidable = require("formidable");



//創建dian畫面
app.get('/dian', function (req, res) {
   res.sendFile( __dirname + "/viewer/" + "demo.html" );
})
//上船訂單後 get不會主動更新新頁面到'/order_upload'
/*app.post('/order_upload', function (req, res) {
 
   var response = {
	   //從html query來ㄉ(要來ㄉ)
	   
       "phone":req.query.phone,
       "food":req.query.food
   };
   var txt="【手機號】"+req.query.phone+"\r\n【點的菜】"+req.query.food+"\r\n*********\r\n";
   console.log(response);
   //res.end(JSON.stringify(response));
   //res.end(txt);
   //action="http://127.0.0.1:8081/order_upload"

   fs.appendFile('viewer/order.txt', txt, function (err) {
    if (err)
        console.log(err);
    else
        console.log('已完成訂餐!');
    res.send("1");
});
})*/

/*//不使用MVC
app.post('/order_upload', (req,res)=>{
   var form = new formidable.IncomingForm();
   form.parse(req, function(err,fields){
   	console.log(fields);
    fs.appendFile("./viewer/order.txt",JSON.stringify(fields)+"\r\n",function(err,fields,){
	if(err){
		res.send("-1");		
	}else{
		res.send("1");
	}
	
     });	
   });
});*/

//使用MVC
app.post('/order_upload',mainctrl.save);

app.use(express.static("public"));
//靜態顯示的照片
//app.use('/public',express.static('public'));
//app.use(bodyParser.urlencoded({ extended: false }));//使用post
//app.use(multer({ dest: '/tmp/'}).array('image'));//

var server = app.listen(8081,()=>{
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
  console.log("应用实例，访问地址为 http://127.0.0.1", host, port)
 
})