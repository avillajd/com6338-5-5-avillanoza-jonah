var form = document.querySelector('form')
var addToDo = document.querySelector('add-todo')
var input= document.querySelector('input')
const add = document.querySelector('button')
const toDoList = document.querySelector('#todo-list')
let buttons

// Add Button event
form.addEventListener('submit', onSubmit);

//Delete event
toDoList.addEventListener('click' , removeItem)

//add item 
function onSubmit(e){
    e.preventDefault();
    console.log(input.value)


// Thanks for this tip Efren ...
    if (input.value != false ){
        //Create new ul item
        const button = document.createElement('button')
        const li = document.createElement('li');
       
        
        // Add a Class name
        li.className = 'items'
        console.log(li)

        //add textnode with input value and button ?
        var todo = input.value.trim() //Thanks Efren!
        li.appendChild(button)
        button.textContent = todo
        
        
        
        
        //Appending Child 
        toDoList.appendChild(li);
        

// if you dont enter a value returns...
        input.value = '';
        
    } else {
        console.log('Type in a task... Test')
        return
    }
    
}

// Remove item and Strike Through
function removeItem(e){
    console.log('clicked for strike through');
    const strikeThrough = document.querySelector('items')

    if (e.target.style.textDecoration != 'line-through') {
        e.target.style.textDecoration = 'line-through'
    } else if (e.target.style.textDecoration = 'line-through') {
        e.target.parentElement.remove()
        console.log('completed')
    }
    

}
