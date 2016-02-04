var data = require("../data.json");



exports.addFriend = function(req, res) {    
	var newFriend = { 
		"name": req.query.name,
		"description": req.query.description,
		"imageURL": "http://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Douglas_Engelbart_in_2008.jpg/972px-Douglas_Engelbart_in_2008.jpg"		
	};
	data['friends'].push(newFriend);
	res.render('index', data);
	// Your code goes here
 }