const express = require("express")
const bodyParser = require("body-parser")
const http = require("http")
const fs = require("fs")
let jwt = require('jsonwebtoken')
const querystring = require("querystring")
const app = express()
app.use(bodyParser.json())


app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:9000");
	res.header("Access-Control-Allow-Headers", "Content-type");
	res.header("Content-type", "application/json;charset=utf-8");
	next();
});

app.post('/server/data', function(req, res, next) {
	res.end('1')
})

const options = {
	hostname: "www.lb717.com",
	port: 80,
	path: "/mall/index/getGoodsChannel",
	method: "POST",
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'

	}
}


app.post('/mall/index/getGoodsChannel', function(req, res) {
	let data = "";
	let request = http.request(options, (response) => {
		response.setEncoding("utf8");
		response.on("data", (chunk) => {
			data += chunk
		})
		response.on("end", () => {
			res.end(JSON.stringify(data))
		})
	})
	request.write(querystring.stringify(req.body))
	request.end()
})


//注册
app.post('/user/reg', function(req, res) {
	let user = fs.readFileSync('user.json', {
		encoding: 'utf-8'
	});

	fs.writeFile('user.json', JSON.stringify(req.body), function(err) {
		if (err) throw err;
		res.end(JSON.stringify({
			"code": 1
		}))
	})
})


//登录
app.post('/user/login', function(req, res) {
	let user = fs.readFileSync('user.json', {
		encoding: 'utf-8'
	});
	let login = JSON.stringify(req.body);
	let resInfo = {
		success: 0,
		info: 'ERROR Incorrect username or password',
		token: ''
	}
	if (user.username == login.username && user.password == login.password) {
		resInfo.success = 1;
		resInfo.info = 'login success';
	}

	if (resInfo.success == 1) {
		resInfo.token = jwt.sign(login, '1511')
	}

	res.end(JSON.stringify(resInfo))
})

// 添加购物车
app.post("/addCart", function(req, res, next) {
	jwt.verify(req.body.token, "1511", (err, decoded) => {
		if (err) {
			res.json(err)
		} else {
			let cartInfo = JSON.parse(fs.readFileSync("./addCart.json", {
				encoding: "utf-8"
			}))
			console.log(cartInfo)
			if (cartInfo[decoded.username]) {
				let cartName = cartInfo[decoded.username];
				let flag = false;
				// cartInfo[decoded.username].push(req.body.info)
				cartName.forEach((item, index) => {
					if (item.goods_id == req.body.info.goods_id) {
						++item.count;
						flag = true;
					}
				})
				if (!flag) {
					req.body.info.count = 1;
					req.body.info.selectd = 0;
					cartName.push(req.body.info)
				}
			} else {
				req.body.info.count = 1;
				req.body.info.selectd = 0;
				cartInfo[decoded.username] = [req.body.info]
			}
			fs.writeFile("./addCart.json", JSON.stringify(cartInfo), function(err) {
				if (err) return;
				res.end(JSON.stringify({
					code_num: 1,
					code_info: "已成功添加到购物车"
				}))
			})
		}
	})
})
//渲染购物车
app.post("/countCart", function(req, res, next) {
	jwt.verify(req.body.token, "1511", (err, decoded) => {
		if (err) {
			res.json(err)
		} else {
			let cartInfo = JSON.parse(fs.readFileSync("./addCart.json", {
				encoding: "utf-8"
			}))
			if (cartInfo[decoded.username]) {
				res.end(JSON.stringify(cartInfo[decoded.username]))
			}
		}
	})
})

app.listen(8000, function() {
	console.log("server listen 8000");
})