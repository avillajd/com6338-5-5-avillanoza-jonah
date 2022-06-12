var form = document.querySelector('form')
var addToDo = document.querySelector('add-todo')
var input= document.querySelector('input')
const add = document.querySelector('button')
const toDoList = document.querySelector('#todo-list')

// Add Button event
form.addEventListener('submit', onSubmit);

//Delete event
toDoList.addEventListener('click' , removeItem)

//add item 
function onSubmit(e){
    e.preventDefault();
    console.log(input.value)

    if (input.value){
        //Create new ul item
        const li = document.createElement('li');

        // Add a list item within ToDo 
        for (let i = 0; i < toDoList.length; i++) {
            const li = item[i];
        }
        
        // Add a Class name
        li.className = 'items'
        console.log(li)

        //add textnode with input value
        li.appendChild(document.createTextNode(`${input.value}`))
        
        //Appending Child 
        toDoList.appendChild(li);


        input.value = '';
    }
    
}

// Remove item
function removeItem(e){
    console.log('clicked for strike through');
    const strikeThrough = document.querySelector('items')
    
    
    

}
