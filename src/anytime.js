export const anytimeTodos = {
    init: () => {
        const anytimeBtn = document.querySelector(".anytime-btn");
        anytimeBtn.addEventListener("click", anytimeTodos.render);
    },
    render: () => {
        const todoWrapper = document.querySelectorAll(".todo-wrapper");
        const notAnytime = [...todoWrapper].filter(node => 
            !node.classList.contains("anytime")
        )
        const anytime = [...todoWrapper].filter(node => 
            node.classList.contains("anytime")
        )
        notAnytime.forEach(element => {
            element.style.display = "none";
        })
        anytime.forEach(element => {
            element.style.display = "block";
        })
    }
}