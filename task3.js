function checkIpAddress(ipAddress){
  console.log(/^([01]?[0-9][0-9]?|25[0-5]|2[0-4][0-9])(\.|:)([01]?[0-9][0-9]?|25[0-5]|2[0-4][0-9])(\.|:)([01]?[0-9][0-9]?|25[0-5]|2[0-4][0-9])(\.|:)([01]?[0-9][0-9]?|25[0-5]|2[0-4][0-9])$/.test(ipAddress));
}


function subDomain(url){
var check=/\w+?w*\.\w+\.\w+/g.test(url)

if(check){
  var matchedUrl=url.match(/\/\w+\./)
  if(matchedUrl===null){
    matchedUrl=url.match(url.match(/^\w*\./))

  }
  console.log("Output: ",matchedUrl[0].match(/\w+/)[0]);
}
else{
  console.log("NO SUBDOMAIN");
}
}
//subDomain("https://apps.juegostudio.com")
checkIpAddress("11:234:52")
checkIpAddress("11.234.52.124")
checkIpAddress("11:234:52:124")
checkIpAddress("11:234:52:256")
