window.onload = () => {
   let button = document.querySelector(".btn");
   button.addEventListener("click", calculateBmi);
}
function calculateBmi() {
    let height = parseInt(document.querySelector("#inp1").value);
    let weight = parseInt(document.querySelector("#inp2").value);
    let result = document.querySelector(".result");
    if (height === "" || isNaN(height) || height < 0) {
        result.innerHTML = "please provide a valid height";
    }
    else if (weight === "" || isNaN(weight) || weight < 0) {
        result.innerHTML = "please provide a valid weight";
    }
    else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            result.innerHTML = `under wait:  ${bmi} `;
        }
        else if (bmi > 18.6 && bmi < 24.6) {
            result.innerHTML = `normal wait: <span> ${bmi} </span>`;
        }
        else {
            result.innerHTML = `over wait:  ${bmi} `;
        }
    }
}