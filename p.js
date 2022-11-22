let folder1 = document.getElementsByClassName("folder1")[0]
let folder2 = document.getElementsByClassName("folder2")[0]
let main = document.getElementsByClassName("main")[0]
let modalContainer1 = document.getElementsByClassName("modal-container1")[0]
let modalContainer2 = document.getElementsByClassName("modal-container2")[0]

folder1.addEventListener("click", function () {
    modalContainer1.style.display = "block"

})

modalContainer1.addEventListener("click", function () {
    modalContainer1.style.display = "none"

    folder2.addEventListener("click", function() {
        modalContainer2.style.display = "block"

    })

})
modalContainer2.addEventListener("click", function () {
    modalContainer2.style.display = "none"

})

