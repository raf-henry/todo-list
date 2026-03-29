const input = document.getElementById("taskInput")
const button = document.getElementById("addTaskBtn")
const list = document.getElementById("taskList")





function saveTasks(){

    const tasks = []

    document.querySelectorAll("#taskList li").forEach(li => {

        const span = li.querySelector("span")
        const completed = span.classList.contains("completed")
        


        tasks.push({

            text: span.textContent,
            completed: completed
        })

    })

    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function updateCounter(){
    
    const tasks = document.querySelectorAll("#taskList li").length
    if (tasks === 1) {

        document.getElementById("taskCounter").textContent =
        tasks + " tarefa"

    }

    else document.getElementById("taskCounter").textContent =
         tasks + " tarefas"
}

function createTask(taskText, completed = false){

    const li = document.createElement("li")
    const span = document.createElement("span")
    const remove = document.createElement("button")
    const check = document.createElement("button")

    

    span.classList.add("text-align")
    span.textContent = taskText

    check.textContent = "✓"
    check.classList.add("check-btn")

    remove.textContent = "-"
    remove.classList.add("remove-btn")


    if(completed){
        span.classList.add("completed")
        check.classList.add("completed-btn")
    }


    remove.addEventListener("click", function(){
        li.remove()
        updateCounter()
        saveTasks()
        
    })


    check.addEventListener("click", function(){

        span.classList.toggle("completed")
        check.classList.toggle("completed-btn")
        updateCounter()
        saveTasks()
        

    })

    
    li.appendChild(check)
    li.appendChild(span)
    li.appendChild(remove)

    list.appendChild(li)

}


function addTask(){

    

    const taskText = input.value.trim()

    if(taskText === "") return

    createTask(taskText)

    input.value = ""

    updateCounter()
    saveTasks()

    
    
}


function loadTasks(){

    const tasks = JSON.parse(localStorage.getItem("tasks")) || []

    tasks.forEach(task => {

        createTask(task.text, task.completed)

    })

}


input.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        event.preventDefault()

        addTask()

    }

})


button.addEventListener("click", addTask)


loadTasks()