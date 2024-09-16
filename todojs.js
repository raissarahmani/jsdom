let editRow = null

document.addEventListener("DOMContentLoaded", () => {
    let todo = ""
    let dateTodo = ""

    const changeToRed = document.querySelector("#red")
    const changeToBlue = document.querySelector("#blue")
    const changeToWhite = document.querySelector("#white")
    const linkGoogle = document.querySelector("#google")
    const linkYoutube = document.querySelector("#youtube")
    const inputTodo = document.querySelector("#todo")
    const inputDate = document.querySelector("#date")
    const btnSubmit = document.querySelector("#submit")
    const todoTable = document.querySelector(".list table")
    
    changeToRed.addEventListener("click", () => {
        document.body.style.background = "red"
    }, false)
    
    changeToBlue.addEventListener("click", () => {
        document.body.style.background = "blue"
    }, false)
    
    changeToWhite.addEventListener("click", () => {
        document.body.style.background = "white"
    }, false)
    
    linkGoogle.addEventListener("click", () => {
        window.location.href = "https://www.google.com"
    }, false)
    
    linkYoutube.addEventListener("click", () => {
        window.location.href = "https://www.youtube.com"
    }, false)
    
    inputTodo.addEventListener("input", (v) => {
        todo = inputTodo.value
    }, false)

    inputDate.addEventListener("input", (v) => {
        dateTodo = inputDate.value
    }, false)

    btnSubmit.addEventListener("click", () => {
        console.log("Todo:", todo, "Date:", dateTodo);
        if(todo !== "" && dateTodo !== "") {
            if (editRow) {
                editRow.cells[1].innerText = todo
                editRow.cells[2].innerText = dateTodo
                editRow = null
            } else {
                const rowCount = todoTable.rows.length
                const inputTable = document.createElement("tr");
                inputTable.innerHTML = `
                <td>${rowCount}</td>
                <td>${todo}</td>
                <td>${dateTodo}</td>
                <td>
                    <button class="edit"> Edit </button>
                    <button class="delete"> Delete </button>
                </td> `
                todoTable.appendChild(inputTable)

                const btnEdit = inputTable.querySelector(".edit")
                const btnDelete = inputTable.querySelector(".delete")

                btnEdit.addEventListener("click", () => {
                    inputTodo.value = inputTable.cells[1].textContent
                    inputDate.value = inputTable.cells[2].textContent
                    editRow = inputTable
                }, false)
                btnDelete.addEventListener("click", () => {
                    inputTable.remove()
                    updateRow()
                }, false)
            }  
            inputTodo.value = ""
            inputDate.value = ""
            todo = ""
            dateTodo = ""
        } else {
            alert("Semua input wajib diisi")
        }
    }, false)
    const updateRow = () => {
        const rows = todoTable.querySelectorAll("tr")
        rows.forEach((row,index) => {
            if (index>0) {
                row.cells[0].innerText = index
            }
        })
    }
})
