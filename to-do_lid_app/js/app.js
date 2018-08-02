
// Listening the the clicked event from the user
// if the user clicks the button and the textfield is not empty
// we add the text to the to-do list
document.getElementById('add').addEventListener('click',function(){
   var val = document.getElementById('item').value;
   if (val) addItemTodo(val);
});
function addItemTodo(item){
  console.log(item);
}
