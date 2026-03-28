const input = document.getElementById("taskInput")
const button = document.getElementById("addTaskBtn")
const list = document.getElementById("taskList")

function saveTasks() {
    const tasks = []

    document.querySelectorAll("#taskList li span").forEach(span => {
        tasks.push(span.textContent)
    })

    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []

    tasks.forEach(taskText => {
        const li = document.createElement("li")
        const span = document.createElement("span")
        const remove = document.createElement("button")

        span.textContent = taskText

        remove.textContent = "-"
        remove.classList.add("remove-btn")

        remove.addEventListener("click", function() {
            li.remove()
            saveTasks() // atualiza o localStorage
        })

        li.appendChild(span)
        li.appendChild(remove)
        list.appendChild(li)
    })
}

function addTask(){
    const taskText = input.value
    if(taskText === "") return

    const li = document.createElement("li")
    const span = document.createElement("span")
    const remove = document.createElement("button")

    span.textContent = taskText

    remove.textContent = "-"
    remove.classList.add("remove-btn")

    remove.addEventListener("click", function(){
        li.remove()
        saveTasks() // atualiza ao remover
    })

    li.appendChild(span)
    li.appendChild(remove)
    list.appendChild(li)

    input.value = ""

    saveTasks() // atualiza ao adicionar
}


input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        event.preventDefault()
        
        addTask()
        
    }

})

button.addEventListener("click", function(){

    addTask()
    
})


loadTasks()


