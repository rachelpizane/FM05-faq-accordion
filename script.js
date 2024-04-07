function hideShowElement(questionNumber) {
    let answer = document.getElementById("answer" + questionNumber);
    let button = document.getElementById("button" + questionNumber)

    if (answer.style.display === "block") {
        answer.style.display = "none";
        button.src = "img/icon-plus.svg"
        button.alt = "icon plus";
    } else {
        answer.style.display = "block";
        button.src = "img/icon-minus.svg";
        button.alt = "icon minus";
    }
}