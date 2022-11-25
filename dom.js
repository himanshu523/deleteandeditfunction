var form =document.getElementById('addForm');
var itemList =document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItem);

//delete event

itemList.addEventListener('click',removeItem);

//edit event

itemList.addEventListener('click',editItem);

//filter event

filter.addEventListener('keyup',filterItems);


//add item
function addItem(e){
    e.preventDefault();
    
//get input value
    var newItem = document.getElementById('item').value;

//get description value

    var des =document.getElementById('description').value;

//create new li element
var li = document.createElement('li');

//add class
li.className='list-group-item';

//add text node with input value
li.appendChild(document.createTextNode(newItem)); 

//add description node with input value
li.appendChild(document.createTextNode(des));

//CREATE DELETE BUTTON ELEMENT

var deleteBtn = document.createElement('button');

//add classes to delet button

deleteBtn.className ='btn btn-danger btn-sm float-right delete';

//append textnode 
deleteBtn.appendChild(document.createTextNode('x'));

//CREATE EDIT BUTTON

var editBtn = document.createElement('button');

//ADD classes to edit button

editBtn.className='btn btn-edit btn-sm float-right edit';

//append textnode
editBtn.appendChild(document.createTextNode('EDIT'));

//append button to li
li.appendChild(deleteBtn);
li.appendChild(editBtn);
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

function editItem(e)
{
    if(Button.textContent==='EDIT')
    {
      const spam = li.firstElementChild;
      const input=document.createElement('input');
      input.type='text';
      
      
    }
    

}

//filter item

function filterItems(e){
  //convert text to lwercase

  var text =e.target.value.toLowerCase();
  //get lis
 var items = itemList.getElementsByTagName('li');
 //convert to array
 Array.from(items).forEach(function(item){
  var itemName =item.textContent;
  if(itemName.toLowerCase().indexOf(text)!=-1){
    item.style.display='block';
  }
  else{
    item.style.display='none';
  }

  });
 }





