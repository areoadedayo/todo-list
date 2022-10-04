var allToDo = []
var toDoOfUser = ""
// var toDoOfUser = inp.value  
var mySchool = new Audio("congrat.mp3")

function addTodo() {
    toDoOfUser = inp.value
    inp.value = ""

    if (toDoOfUser=="") {
        alert('empty todo list')
      
       
    }else{
        allToDo.push(toDoOfUser)
    console.log(allToDo)
    disp.innerHTML = ""
    
    for (let index = 0; index < allToDo.length; index++) {
        disp.innerHTML += `
        <tr>
        <td>${index}</td>
        <td><h1>${allToDo[index]}</h1></td>
        <td><button onclick="deleteItem(${index})">Delete</button></td>
        <td><button onclick="editItem(${index})">Edit</button></td>
        </tr>
        `
        mySchool.play()
    }
    
    }
    
}
function deleteAllTodo() {
    allToDo.splice(0, allToDo.length)
    disp.innerHTML = allToDo 
}
function deleteItem(i){
    allToDo.splice(i,1)
    console.log(allToDo)
    disp.innerHTML = ""
    for (let index = 0; index < allToDo.length; index++) {
        disp.innerHTML += `
        <tr>
        <td>${index}</td>
        <td><h1>${allToDo[index]}</h1></td>
        <td><button onclick="deleteItem(${index})">Delete</button></td>
        <td><button">Edit</button></td>
        </tr>            
        `
}
}
function editItem(ind){
    var userAnswer =  prompt("Edit your Todo")
    allToDo.splice(ind,1)
    disp.innerHTML = ""
    for (let index = 0; index < allToDo.length; index++) {
        disp.innerHTML += `
        <tr>
        <td>${index}</td>
        <td><h1>${allToDo[index]}</h1></td>
        <td><button onclick="deleteItem(${index})">Delete</button></td>
        <td><button">Edit</button></td>
        </tr>            
        `
}
}
