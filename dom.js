var form =document.getElementById('addForm');
var itemList =document.getElementById('items');

//form submit event
form.addEventListener('submit',addItem);

//delete event

itemList.addEventListener('click',removeItem);

//filter event

filter.addEventListener('keyup', filterItems);

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

function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
