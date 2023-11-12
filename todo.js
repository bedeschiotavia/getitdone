document.addEventListener ('DOMContentLoaded', function(){
    let ourForm = document.getElementById("ourForm")
    let ourField = document.getElementById("ourField")
    let ourList = document.getElementById("ourList")

    ourForm.addEventListener("submit", (e) => {
      e.preventDefault()
      createItem(ourField.value)
    })

  function createItem (item) {
    let ourHTML = `<li>${item}<button onclick="deleteItem(this)"class="delete btn btn-primary btn-sm">DONE!</button></li>`
    ourList.insertAdjacentHTML("beforeend", ourHTML)
    ourField.value = ""
    ourField.focus()
  }

})
function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove()
}
