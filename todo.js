const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = "☀️";
    }else{
        themeBtn.innerHTML = "🌙";
    }

});

const fields = ["taskinput", "dueDate", "dueTime","taskMood"];

fields.forEach(function(id) {

    document.getElementById(id).addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            event.preventDefault();
            addTask();
        }

    });

});

function addTask(){

    let taskInput=document.getElementById("taskinput");
    let mood = document.getElementById("taskMood").value;
    let dateInput=document.getElementById("dueDate");
    let timeInput=document.getElementById("dueTime");

    let task=taskInput.value.trim();
    let date=dateInput.value;
    let time=timeInput.value;

    if(task===""){
        alert("Enter a task");
        return;
    }

    let li=document.createElement("li");

    let status="";

    if(date!==""){

        let deadline=new Date(date+"T"+(time || "23:59"));
        let now=new Date();

        if(deadline<now){
            status="<span class='overdue'>⚠ Overdue</span>";
        }

    }

    li.innerHTML = `
    <div class="task-info">

        <span class="task-title">
            ${mood} ${task}
        </span>

        <small class="due">
            📅 ${date || "No Date"}
            ${time ? "🕒 " + time : ""}
        </small>

        ${status}

    </div>
    <div>
        <button onclick="completeTask(this)">✔</button>
        <button onclick="deleteTask(this)">✖</button>

    </div>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value="";
    dateInput.value="";
    timeInput.value="";

    taskInput.focus();
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
}

function completeTask(button) {
     let task = button.parentElement.previousElementSibling;

    task.classList.toggle("completed");

}



