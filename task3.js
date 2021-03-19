/*function checkIpAddress(IpAddress){
  console.log(/([0-1]\d\d|2[0-5][0-5])\./g.test(IpAddress));
}
checkIpAddress(265)
*/
function subDomain(url){
var check=/\w+?\w+\.\w+\.\w+/g.test(url)

if(check){
  var matchedUrl=url.match(/\/\w+\./)
  console.log("Output: ",matchedUrl[0].match(/[a-zA-z0-9]+/)[0]);
}
else{
  console.log("NO SUBDOMAIN");
}
}
subDomain("https://frontend.juegostudio.com ")
