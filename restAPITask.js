/*
let request = new XMLHttpRequest();
request.onload=function() {
  console.log(request.responseText);
}

var device_token = Math.floor(Math.random()*Date.now()*Math.random())
var sendData=`device_token=${device_token}&methodName=user.login&applicationKey=20191226&login_type=3`
request.open("POST","http://juegostudio.in/SUGI-APP/V2/rest.php",true)
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
request.send(sendData)
*/
var data=""
var device_token = Math.floor(Math.random()*Date.now()*Math.random())
const fetchPromise=fetch("http://juegostudio.in/SUGI-APP/V2/rest.php", {
    method: "POST",
    headers: { "Content-type": "application/x-www-form-urlencoded"},
    body:`device_token=${device_token}&methodName=user.login&applicationKey=20191226&login_type=3`
})
fetchPromise.then(response => {
  return response.json()
}).then(data=>{
  console.log(data);
})
fetchPromise.catch(error =>  {
  console.log("unable to handle",error);
})
