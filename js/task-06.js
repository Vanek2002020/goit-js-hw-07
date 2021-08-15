const val = document.querySelector('#validation-input');
const funcBlur = () => {
    val.classList.forEach(elem => val.classList.remove(elem));
    if (val.value.length === parseInt(val.dataset.length, 10)) {
        val.classList.add('valid');
    } else {
        val.classList.add('invalid');
    }
};
val.addEventListener('blur', funcBlur);