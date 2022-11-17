var form =document.getElementById('addForm');
var itemList =document.getElementById('items');

//form submit event
form.addEventListener('submit',addItem);

//delete event

itemList.addEventListener('click',removeItem);

//add item
function addItem(e){
    e.preventDefault();
    
//get input value
    var newItem = document.getElementById('item').value;

//create new li element
var li = document.createElement('li');

//add class
li.className='list-group-item';

//add text node with input value
li.appendChild(document.createTextNode(newItem)); 

//CREATE DELETE BUTTON ELEMENT

var deleteBtn = document.createElement('button');

//add classes to delet button

deleteBtn.className ='btn btn-danger btn-sm float-right delete';

//append textnode 
deleteBtn.appendChild(document.createTextNode('x'));

//append button to li
li.appendChild(deleteBtn);

itemList.appendChild(li);
}




function removeItem(e)
{
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure')){
            var li =e.target.parentElement;
            itemList.removeChild(li);
        }
    }
   
}

