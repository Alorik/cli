

let ctr = 1;

function deleteTodo(index) {
  const element = document.getElementById("todo-" + index);
  element.parentNode.removeChild(element);
}
function addtodo () {
  const inputEl = document.querySelector("input");
  const value = inputEl.value ;

  const newDivEl = document.createElement("div");
  newDivEl.setAttribute("id", "todo-" + ctr );
  newDivEl.innerHTML = "<div>" + value + "</div> <button onclick='deleteTodo(" + ctr + ")'>DELETE</button>"

  document.querySelector("body").appendChild(newDivEl);
  ctr = ctr + 1;

}

