function exchangekeyValues(sourceObject) {
  Object.keys(sourceObject).forEach((keys) => {
    if(sourceObject.hasOwnProperty(sourceObject[keys])){
      value= " "+keys
      sourceObject[sourceObject[keys]] += value
    }
    else{
      sourceObject[sourceObject[keys]]=keys
    }
      delete sourceObject[keys]
  });
  return sourceObject
}
console.log(exchangekeyValues({10:"hi",11:"hello",13:"how",14:"how"}))
