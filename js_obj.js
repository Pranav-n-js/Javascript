// javascript  Objects

//if else switch and variours operatiors are in basic_js.js

var objects={
"properties":"data in objects are accessed through properties",
"array":["we can store","even array"],
5: "properties like integer will be convereted/typecasted to string",
}
console.log("Object data can be accessed using 'objects.property'",objects.array)
console.log("Or we can also use  'objects['property']'",objects['properties'])

var prop=5
console.log("We can also use variable as property",objects[prop])
objects["5"]="Properties is changed also data"
objects['add']="WE can add new objects like this or using dot"
delete objects.add //to delete
console.log(objects.hasOwnProperty("property"))//to check wether the property is present or not

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];
console.log(myMusic[0]["formats"][1])
console.log(myMusic.length());
