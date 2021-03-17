function checkingNestedObject(entries,replaceObject,sourceObject){
  var replaceObjectKeys=Object.keys(replaceObject)
  entries.forEach((keyValue) => {
      console.log(entries);
  //  console.log(keyValue[1]);
    if(typeof(keyValue[1])==="object"){

      replaceObjectKeys.forEach((keys) => {
      //  console.log(keyValue);
        if(sourceObject[keyValue[0]].hasOwnProperty(keys)){
        //  console.log("su");
          sourceObject[keyValue[0]][keys]=replaceObject[keys]
        }
      });
      var checkObject=Object.entries(keyValue[1])

      checkObject.forEach((value) => {
        if(typeof(value[1])==="object"){
//  console.log(value);
        let object= checkingNestedObject(value,replaceObject,keyValue[1][value[0]])
        return object
      //  console.log(object)
        }

      });



    }
  });


}
function mutationFormula(replaceObject,sourceObject){

  var replaceObjectKeys=Object.keys(replaceObject)  //gets the keys of the replaceObject
  replaceObjectKeys.forEach((keys) => {
    if(sourceObject.hasOwnProperty(keys)){
      sourceObject[keys]=replaceObject[keys]
    }
  });
  var object=checkingNestedObject(Object.entries(sourceObject),replaceObject,sourceObject)
  return sourceObject
}
sourceObject={ name: "pranav", profession: "programmer", address: { street: "1st Lane", place: "Mangalore",dist:{taluk:"manglore", place: "something"} } }
var object= mutationFormula({name: "Ganesh",place:"kottara"}, sourceObject)
//console.log(object)
//console.log();
