const completeButtons = document.querySelectorAll(".btn-primary");
for (let i = 0; i < completeButtons.length; i++) {
    completeButtons[i].addEventListener("click", function () {
        const cardContainer = completeButtons[i].closest('.bg-white');
        const h1text = cardContainer.querySelector("h1").textContent;
        // console.log("Task completed:", h1text);
        completeButtons[i].disabled = true;

        // add content to the left side
        const leftCard = document.getElementById("left-card");
        const newText = document.createElement("p");

        const currentTime = new Date().toLocaleTimeString();
        newText.textContent = "Task: " + h1text + " is completed at " + currentTime;

        newText.className = "text-sm font-semibold text-gray-900 my-1";
        leftCard.querySelector(".history").appendChild(newText);


        // assigned task
        const currentTask = document.getElementById("task-assigned");
        const convertedTask = parseInt(currentTask.innerText);
        // console.log(convertedTask);
        currentTask.innerText = convertedTask - 1;
        alert("board Updated successfully");
        if(convertedTask===1){
            alert("Congrets!! you have completed all your current task.")
        }

        const completedTask = document.getElementById("completed-task");
        const convertedCompletedTask = parseInt(completedTask.innerText);
        // console.log(convertedTask);
        completedTask.innerText = convertedCompletedTask + 1;



    });
}
 document.getElementById("clear-btn").addEventListener("click", function () {
    const historyContainer = document.querySelector(".history");
    const paragraphs = historyContainer.querySelectorAll("p.text-sm.font-semibold.text-gray-900.my-1");

    for (let i = paragraphs.length - 1; i >= 0; i--) {
        historyContainer.removeChild(paragraphs[i]);
    }
});