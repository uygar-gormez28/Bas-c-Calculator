const Button = document.getElementsByTagName("button");
const Input = document.querySelector(".calculator-input");

for (var i = 0; i < 18; i++) {
  if (i != 16 && i != 17) {
    Button[i].addEventListener("click", function () {
      Input.value += this.value;
    });
  }
}

document.querySelector(".hesapla").addEventListener("click", function () {
  Input.value = eval(Input.value);
});

document.querySelector(".clear").addEventListener("click", function () {
  Input.value = "";
});
