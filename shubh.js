let string = "";

let buttons = document.querySelectorAll(".button");
let input = document.querySelector(".input");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {

        let value = e.target.innerText;

        console.log(value);

        if (value == "C") {
            string = "";
        }
        else if (value == "=") {
            try {
                string = eval(string);
            } catch {
                string = "Error";
            }
        }
        else if (value == "M+") {
            // Memory Plus
            console.log("M+ clicked");
        }
        else if (value == "M-") {
            // Memory Minus
            console.log("M- clicked");
        }
        else {
            string = string + value;
        }

        input.value = string;
    });
});