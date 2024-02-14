const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById('listContainer');
const alerts = document.getElementById('alerts');
const addButton = document.getElementById('add');
let notiFy = 'Please enter value'

function addTask() {
  if(inputBox.value == '') {
    alerts.style.color = 'red'
    alerts.innerHTML = notiFy;
}else {
    let li = document.createElement("li"); //creating  a new <li> element
    li.innerHTML = inputBox.value;// text added from the inpu field
    listContainer.appendChild(li); // This is to display th li under the list container
    alerts.innerHTML = '';
    let span = document.createElement("span"); // creating a new <span> tag
    span.innerHTML = '\u00d7'; // this gives us x symbol for deleting task
    li.appendChild(span); // adding the span inside of our newly created <li>
    //This will give us functionality to delete tasks by clicking on the x next to each task
    span.onclick = function () {
      // this will remove the task from the list when we click on the x
      li.parentNode.removeChild(li)
    }
  }
  //  inputBox.value='' //this makes the box empty after every entry
  inputBox.value = ''; //if there's no text in the input box it becomes empty.
  saveData();//
}

listContainer.addEventListener('click', function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false) 

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask()

