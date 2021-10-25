import { addDays } from "date-fns";

export const upcomingTodos = {
    init: () => {
        const upcomingBtn = document.querySelector(".upcoming-btn");
        upcomingBtn.addEventListener("click", upcomingTodos.render);
    },
    render: () => {
        const dateContent = document.querySelectorAll(".date-content");

        let upcomingDays = [];
        for (let i = 0 ; i < 7 ; i++) {
            upcomingDays.push(addDays(new Date(), i).toJSON().slice(0,10))
        }

        const notUpcoming = [...dateContent].filter(node =>
            !upcomingDays.includes(node.textContent)
        )
        const upcoming = [...dateContent].filter(node =>
            upcomingDays.includes(node.textContent)
        )

        notUpcoming.forEach(element => {
            element.closest(".todo-wrapper").style.display = "none";
        })
        upcoming.forEach(element => {
            element.closest(".todo-wrapper").style.display = "block";
        })
    }
}