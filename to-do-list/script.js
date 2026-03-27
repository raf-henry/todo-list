const input = document.getElementById("taskInput")
const button = document.getElementById("addTaskBtn")
const list = document.getElementById("taskList")

function addTask(){

    const taskText = input.value

    if(taskText === "") return

    const li = document.createElement("li")
    const remove = document.createElement("button")

    remove.classList.add("remove-btn")
    remove.textContent = "-"

    remove.addEventListener("click", function(){
        li.remove()
    })

    li.textContent = taskText

    li.appendChild(remove)
    list.appendChild(li)

    input.value = ""
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





