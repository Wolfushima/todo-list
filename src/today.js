export const todayTodos = {
    init: () => {
        const todayBtn = document.querySelector(".today-btn");
        todayBtn.addEventListener("click", todayTodos.render);
    },
    render: () => {
        let todayDate = new Date().toJSON().slice(0,10);
        const dateContent = document.querySelectorAll(".date-content");
        const notToday = [...dateContent].filter(node => 
            node.textContent != todayDate
        )
        const today = [...dateContent].filter(node => 
            node.textContent === todayDate
        )
        notToday.forEach(element => {
            element.closest(".todo-wrapper").style.display = "none";
        })
        today.forEach(element => {
            element.closest(".todo-wrapper").style.display = "block";
        })
    }
}