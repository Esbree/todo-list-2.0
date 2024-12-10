function addTodo() {
  const addButton = document.getElementById("add-button");
  const userInputText = document.getElementById("user-input");
  const list = document.getElementById("todo-list");

  addButton.addEventListener("click", function () {
    if (userInputText.value !== "") {
      // Neues Listen-Element erstellen
      const newItem = document.createElement("li");

      // Text des Todos hinzufügen
      newItem.textContent = userInputText.value;

      // Löschen-Button erstellen
      const newItemRemove = document.createElement("button");
      newItemRemove.textContent = "remove";

      // Event-Listener für den Löschen-Button
      newItemRemove.addEventListener("click", function () {
        list.removeChild(newItem);
      });

      // Button zum Listen-Element hinzufügen
      newItem.appendChild(newItemRemove);

      // Listen-Element zur Liste hinzufügen
      list.appendChild(newItem);

      // Eingabefeld leeren
      userInputText.value = "";
    }
  });
}

export default addTodo;
