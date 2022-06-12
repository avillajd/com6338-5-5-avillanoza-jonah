var form = document.querySelector('form')
var addToDo = document.querySelector('add-todo')
var input= document.querySelector('input')

form.onsubmit = function (e) {
    e.preventDefault()
    console.log(input.value)
    // addToDo.input = this.input.value
    // this.input.value = ""
}