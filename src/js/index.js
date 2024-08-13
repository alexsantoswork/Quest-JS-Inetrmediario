const inputText = document.querySelectorAll(".input-text, .mensagem");

inputText.forEach(input => {

input.addEventListener('change', () => {

if (input.value !== "") {

input.classList.add("preenchido")

} else {

input.classList.remove("preenchido")

}
});
});