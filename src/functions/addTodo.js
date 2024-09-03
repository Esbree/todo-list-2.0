function addTodo() {
  const addButton = document.getElementById("add-button");
  const userInputText = document.getElementById("user-input");
  const list = document.getElementById("todo-list");

  addButton.addEventListener("click", function () {
    if (userInputText.value != "") {
      const newItem = document.createElement("li");
      newItem.textContent = userInputText.value;
      list.appendChild(newItem);
      userInputText.value = "";
    }
  });
}

export default addTodo;
