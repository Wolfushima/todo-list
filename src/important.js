export const importantTodos = {
    init: () => {
        const importantBtn = document.querySelector(".important-btn");
        importantBtn.addEventListener("click", importantTodos.render);
    },
    render: () => {
        const todoWrapper = document.querySelectorAll(".todo-wrapper");
        const notImportant = [...todoWrapper].filter(node => 
            !node.classList.contains("important")
        )
        const important = [...todoWrapper].filter(node => 
            node.classList.contains("important")
        )
        notImportant.forEach(element => {
            element.style.display = "none";
        })
        important.forEach(element => {
            element.style.display = "block";
        })
    }
}