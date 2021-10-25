export const today = {
    init: () => {
        const todayBtn = document.querySelector(".today-btn");
        todayBtn.addEventListener("click", today.render);
    },
    render: () => {
        let todayDate = new Date().toJSON().slice(0,10);
        const dateContent = document.querySelectorAll(".date-content");
        const notTodayDate = [...dateContent].filter(node => 
            node.textContent != todayDate
        )
        notTodayDate.forEach(element => {
            element.closest(".todo-wrapper").style.display = "none";
        })
    }
}