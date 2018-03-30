let domain;
if (process.env == "development") {
	domain = "http://localhost:8000"
}
if (process.env == "production") {
	domain = "http://www.lb717.com"
}

let $http = {
	get(url, data) {
		if (Object.prototype.toString.call(data) != "[object Object]") {
			return {
				then(callback) {
					callback("GET请求不行");
					return {
						catch (err) {
							err(new Eeeor("不行"))
						}
					}
				}
			}
		}
		let queryString = "?"
		for (let i in data) {
			queryString += (i + "=" + data[i] + "&")
		}

		url = encodeURI(url + queryString.slice(0, -1));
		console.log(url);
		return fetch(domain + url, {
			"headers": {
				"Content-Type": "application/json;charset=utf-8"
			}
		}).then(res => res.json())
	},
	post(url, data) {
		if (Object.prototype.toString.call(data) != "[object Object]") {
			return {
				then(callback) {
					callback("GET请求入参格式不正确，需要传object")
					return {
						catch (err) {
							err(new Error("入参格式不正确"))
						}
					}
				}
			}
		}
		return fetch(domain + url, {
			"body": JSON.stringify(data),
			"headers": {
				"Content-Type": "application/json;charset=utf-8",
			},
			"method": "POST"
		}).then(res => res.json())
	}
}
export default $http