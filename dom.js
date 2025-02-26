//document.addEventListener("DOMContentLoaded" , function (){
//
//
//
//    document.querySelector("#submit").disabled = true;
//
//
//
//
//    document.querySelector("#text").onkeyup = function () {
//        if (document.querySelector("#text").value.length > 5) {
//            document.querySelector("#submit").disabled = false;
//        }
//        else {
//            document.querySelector("#submit").disabled = true;
//
//        }
//    }
//
//
//    document.querySelector("form").onsubmit = function () {
//    var task = document.querySelector("#text").value;
//
//     var li = document.createElement("li");
//
//    li.innerHTML = task;
//
//    document.querySelector("#ul").appendChild(li);
//
//
//        document.querySelector("#text").value = "";
//
//    return false
//    }
//
//
//
//
//
//
//})







//document.addEventListener("DOMContentLoaded" , function () {
//
//    document.querySelector("#submit").disabled = true;
//
//   document.querySelector("#text").onkeyup = function () {
//    if (document.querySelector("#text").value.length < 5) {
//        document.querySelector("#submit").disabled = true;
//    }
//    else {
//        document.querySelector("#submit").disabled = false;
//    }
//   }
//})
//
//
//






//
//
//
//
//var input = document.querySelector("input")
//
//var btn = document.querySelector(".addtask > button")
//var btn = document.addEventListener("click" , addlist)
//
//
//function addlist(paremeter) {
//    var completed = document.querySelector(".Completed");
//    var notcompleted = document.querySelector(".notcompleted");
//
//    var newli = document.createElement("li");
//
//    var checkbtn = document.createElement("button")
//    var delbtn = document.createElement("button")
//
//
//    checkbtn.innerHTML = '<i class="bi bi-check2"></i>'
//    delbtn.innerHTML = '<i class="bi bi-trash"></i>'
//
//
//
//
//
//
//
//    if (input.value !== '') {
//        newli.innerHTML = input.value;
//        input.value = '';
//
//        notcompleted.appendChild(newli)
//        newli.appendChild(check)
//    }
//}
//
//

//
//var input = document.querySelector(".input");
//
//var btn = document.querySelector("#addTaskButton");
//var btn = document.addEventListener('click', addlist);
//
//
//function addlist(w) {
//    var completed = document.querySelector(".completed");
//    var notcompleted = document.querySelector(".notcompleted");
//
//    var newli = doucment.createElement("li");
//    var checkbtn = doucment.createElement("button");
//    var delbtn = doucment.createElement("button");
//
//    checkbtn.innerHTML = '<i class="bi bi-check2"></i>';
//    delbtn.innerHTML = '<i class="bi bi-trash"></i>';
//
//
//    if (input.value !== '') {
//        newli.innerHTML = input.value;
//        input.value = '';
//
//        notcompleted.appendChild(newli);
//        newli.appendChild(checkbtn);
//        newli.appendChild(delbtn);
//
//
//    }
//}
//








//
//
//var input = document.querySelector(".input");
//var btn = document.querySelector("#addTaskButton");
//
//// Add event listener to the button
//btn.addEventListener('click', addlist);
//
//function addlist(event) {
//    event.preventDefault();
//
//    var completed = document.querySelector(".completed");
//    var notcompleted = document.querySelector(".notcompleted");
//
//    // Create new li element and buttons
//    var newli = document.createElement("li");
//    var checkbtn = document.createElement("button");
//    var delbtn = document.createElement("button");
//
//    checkbtn.innerHTML = '<i class="bi bi-check2"></i>';
//    delbtn.innerHTML = '<i class="bi bi-trash"></i>';
//
//    // Only add the task if input is not empty
//    if (input.value !== '') {
//        newli.innerHTML = input.value; // Set the task text
//        input.value = ''; // Clear the input field
//
//        // Append buttons to the new list item
//        newli.appendChild(checkbtn);
//        newli.appendChild(delbtn);
//
//        // Append the new task to the 'Not Completed' list
//        notcompleted.appendChild(newli);
//
//        checkbtn.addEventListener('click', check)
//
//        function check() {
//            completed.appendChild(newli);
//            newli.removeChild(checkbtn)
//        }
//
//        delbtn.addEventListener('click', function (){
//
//           
//                newli.remove();
//            }
//        )
//    }
//};
//



//
//
//var input = document.querySelector(".input");
//var btn = document.querySelector("#addTaskButton");
//
//// Add event listener to the button
//btn.addEventListener('click', addlist);
//
//function addlist(w) {
//    w.preventDefault(); // Prevent form submission
//
//    var completed = document.querySelector(".completed");
//    var notcompleted = document.querySelector(".notcompleted");
//
//    // Create new li element and buttons
//    var newli = document.createElement("li");
//    var checkbtn = document.createElement("button");
//    var delbtn = document.createElement("button");
//
//    checkbtn.innerHTML = '<i class="bi bi-check2"></i>';
//    delbtn.innerHTML = '<i class="bi bi-trash"></i>';
//
//    // Only add the task if input is not empty
//    if (input.value !== '') {
//        newli.innerHTML = input.value; // Set the task text
//        input.value = ''; // Clear the input field
//
//        // Append buttons to the new list item
//        newli.appendChild(checkbtn);
//        newli.appendChild(delbtn);
//
//        // Append the new task to the 'Not Completed' list
//        notcompleted.appendChild(newli);
//
//        // Check button functionality: Move task to completed
//        checkbtn.addEventListener("click", function () {
//            completed.appendChild(newli); // Move task to "Completed" list
//            newli.removeChild(checkbtn); // Optionally remove check button once checked
//        });
//
//        // Delete button functionality: Remove task from the list
//        delbtn.addEventListener("click", function () {
//            newli.remove(); // Remove the task from the list
//        });
//    }
//}
//
//




//#task_input = =  input
//#addTaskButton == button
//#taskform == form
//#completed == completed section
//#not === notcompleted 


//checkbtn =-'<i class="bi bi-check2"></i>'

//delbtn ==='<i class="bi bi-trash"></i>'
var input = document.querySelector("#task_input");
var form = document.querySelector("#taskForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    var completed = document.querySelector("#completed");
    var notCompleted = document.querySelector("#not");

    var newli = document.createElement("li");
    var checkbtn = document.createElement("button");
    var delbtn = document.createElement("button");

    checkbtn.innerHTML = '<i class="bi bi-check2"></i>';
    delbtn.innerHTML = '<i class="bi bi-trash"></i>';

    if (input.value !== '') {
        newli.innerHTML = input.value;
        input.value = '';

        notCompleted.appendChild(newli);

        newli.appendChild(checkbtn);
        newli.appendChild(delbtn);

        checkbtn.addEventListener('click', function (){
            completed.appendChild(newli);
            newli.removeChild(checkbtn);
        });
        delbtn.addEventListener('click', function () {
            newli.remove();
        });
    }
});







//
//const taskInput = document.getElementById('task_input');
//const addTaskButton = document.getElementById('add-task');
//const taskList = document.getElementById('task-list');
//
//addTaskButton.addEventListener('click', function () {
//    const taskText = taskInput.value.trim();
//    if (taskText) {
//        const li = document.createElement('li');
//        li.textContent = taskText;
//
//        const removeButton = document.createElement('button');
//        removeButton.textContent = 'Remove';
//        removeButton.className = 'remove';
//        removeButton.onclick = function () {
//            taskList.removeChild(li);
//        };
//
//        li.appendChild(removeButton);
//        taskList.appendChild(li);
//        taskInput.value = '';
//    } else {
//        alert('Please enter a task!');
//    }
//});