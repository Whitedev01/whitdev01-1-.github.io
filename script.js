var stuffDiv = document.body.querySelector(".animals");
var list = ["dogs", "fish", "cats","sharks","cats","dogs"];
var number = 0;
function printAnimal(ani) {
  return ani;
}
var word = printAnimal(list[1]);

for (var i = 0; i < list.length; i++) {
  var listItem = document.createElement("div");
  if (list[i]=="dogs") {
    listItem.innerHTML = "borf borf";
  } else if(list[i]=="fish"){
    listItem.innerHTML = "Im a animal";  
  } else if(list[i]=="cats")   {
    listItem.innerHTML = "Im a cat";
  } else if(list[i]=="sharks") {
    listItem.innerHTML = "Im a animal";
  } stuffDiv.appendChild(listItem);
}