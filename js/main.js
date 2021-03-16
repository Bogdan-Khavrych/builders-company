function reload() {
    location.reload()
}

// Answer button

function answer_1() {
    document.getElementById("answer-1").classList.toggle("rotate");
    document.getElementById("answer-1_text").classList.toggle("display-block");
}

function answer_2() {
    document.getElementById("answer-2").classList.toggle("rotate");
    document.getElementById("answer-2_text").classList.toggle("display-block");
}

function answer_3() {
    document.getElementById("answer-3").classList.toggle("rotate");
    document.getElementById("answer-3_text").classList.toggle("display-block");
}

function answer_4() {
    document.getElementById("answer-4").classList.toggle("rotate");
    document.getElementById("answer-4_text").classList.toggle("display-block");
}

// Btn header

function headerBtn() {
    document.getElementById("header-btn-1").classList.toggle("display-inline-flex");
    document.getElementById("header-btn-2").classList.toggle("display-inline-flex");
    document.getElementById("header-btn-3").classList.toggle("display-inline-flex");
    document.getElementById("header-btn-4").classList.toggle("display-inline-flex");
}