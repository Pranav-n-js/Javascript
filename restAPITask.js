const fetch = require("node-fetch");
let requestFetch = (url) => {
    var dToken = Math.floor(Math.random() * Date.now() * Math.random())
    var method = "user.login"
    var appKey = 20191226
    var loginType = 3
    console.log("1")
    return fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/x-www-form-urlencoded" },
        body: `device_token=${dToken}&methodName=${method}&applicationKey=${appKey}&login_type=${loginType}`
    })
}

var data = requestFetch("http://juegostudio.in/SUGI-APP/V2/rest.php")
data.then(response => {
    return response.json()
}).then(data => {
    if (data['responseCode'] === 207) {
        console.log(`Data cannot be fetched from the API, ${data['responseInfo']}`);
    }
    else {
        console.log(data)
        console.log("success");
    }
}, error => {
        console.log("error");
})
data.catch(error => {
    console.log("error");
})
module.exports = requestFetch
