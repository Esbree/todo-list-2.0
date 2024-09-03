function addTodo() {
  const addButton = document.getElementById("add-button");
  const userInputText = document.getElementById("user-input");

  addButton.addEventListener("click", function () {
    console.log(userInputText.value);

    userInputText.value = "";
  });
}

export default addTodo;
