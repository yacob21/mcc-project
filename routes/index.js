var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index2', { title: 'Express' });
});


router.get('/getcwitt',function(req,res,next){
    res.statusCode=200;
	var msg = JSON.stringify(Cwitt.CwittData);
	res.send("call("+msg+")");
});


router.post('/addcwitt',function(req,res,next){
  if(req.body.hasOwnProperty('newCwitt')){
		console.log("post success");
		var date = new Date();
		var min = "";
		var h = "";
		if(date.getHours() < 10)
			h += "0" + date.getHours();
		else
			h = date.getHours();
		if(date.getMinutes() < 10)
			min += "0" + date.getMinutes();
		else
			min = date.getMinutes();
		var data = {"post" : req.body.newCwitt,"time" : h+":"+min};
		Cwitt.CwittData.push(data);
		res.statusCode=200;
		res.send("call(ok)");
	}
});



module.exports = router;
