// document.getElementById("validation-input").onblur = function() {
//     console.log(this.value.length);
//     if (this.getAttribute('data-length') > this.value.length === 6) {
//         this.classList.remove('valid');
//         this.classList.add('invalid');
//     } else {
//         this.classList.remove('invalid');
//         this.classList.add('valid');
//     }
// };



const validLength = 6;
document.getElementById("validation-input").onblur = function() {
    console.log(this.value.length);
    if (this.value.length === validLength) {
        this.classList.remove('invalid')
        this.classList.add('valid')
    } else {
        this.classList.remove('valid')
        this.classList.add('invalid')
    }
}