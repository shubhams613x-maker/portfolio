let input = document.getElementById('inpt');
let text = document.querySelector('.text');
function Add() {

    if (input.value == "") {

        alert("PLEASE ENTER A TASK!");

    }
    else {


        let newEle = document.createElement("ul");

        newEle.innerHTML = `
        ${input.value}
        <i class="fa-solid fa-trash delete"></i>
    `;
        text.appendChild(newEle);
        input.value = ("");
        newEle.querySelector("i").addEventListener("click", remove);
        function remove() {
            newEle.remove();

        }
    }

}
