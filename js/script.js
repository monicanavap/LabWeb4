//variables botones
let post = document.getElementById("buttonPost"); 
let clear = document.getElementById("buttonClear"); 
let mark = document.getElementById("buttonMark"); 
let del  = document.getElementById("buttonDelete"); 

//para los clicks
//tiene 2 param, el evento y funcion
post.addEventListener("click", TodoPost); 
clear.addEventListener("click", TodoClear); 
mark.addEventListener("click", TodoMark); 
del.addEventListener("click", TodoDelete); 



//todas las funciones de click necesitan el parametro e
function TodoPost(e) {
	//inhabilita el comp del boton
	e.preventDefault();
	//al momento que usuario crea texto, obtenemos el valor del texto
	var todo = document.getElementById("todoText").value; 

	var list = document.getElementById("todoList"); 

	//guardar en memoria , agregar elementos tras elementos

	let currentList = list.innerHTML; 
	//currenlist + checkbox
	//para crear un cambpo de checkbox y su respectivo texto
	list.innerHTML = currentList + `<input type= "checkbox" name= "todo" /> ${todo} <br> `
}

function TodoClear(e) {
	e.preventDefault();
	var items = document.getElementsByName("todo"); 


	for (var i = 0;  i < items.length; i++) {
		items[i].checked = false; 

	}

}

function TodoMark(e) {
	e.preventDefault();

	var items= document.getElementsByName("todo"); 

	for (var i = 0;  i < items.length; i++) {
		items[i].checked = true; 

	}

}

function TodoDelete(e) {
	e.preventDefault();
	//placeholder= todolist
	//set innerhtml a vacio 
	document.getElementById("todoList").innerHTML = '';

}