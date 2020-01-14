
var getExampleText = document.getElementsByTagName("h1")[0].innerText;

// console.log(getExampleText)
var generatedSelect = document.createElement("select");
generatedSelect.setAttribute('id', "select");
var selector = document.getElementById("selector");
selector.appendChild(generatedSelect);
var select = document.getElementById("select");
var options = [
  "cookies",
  "tequila",
  "sunshine"
]

for(let i=0; i < options.length; i++) {

  var createOption = document.createElement("option");
  createOption.setAttribute('value', options[i])
  // createOption.innerHTML(options[i]);
  document.getElementById("select").appendChild(createOption).innerHTML = options[i];

}

let word = '';

function replace(str) {
  let find = str.replace("energy drinks", word);
  document.getElementsByTagName("h1")[0].innerHTML = find;
}

document.getElementById("button").onclick = fireConsole;

function fireConsole() {
   word = select[select.selectedIndex].value
   replace(getExampleText);
};
