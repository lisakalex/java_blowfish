// function checkPassword(str) {
//     var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}$/;
//     return re.test(str);
// }
//
// function validateFormPass() {
//     var pw1 = document.getElementById("newPassword").value;
//     var pw2 = document.getElementById("retypePassword").value;
//
//     if (!checkPassword(pw1)) {
//         Swal.fire({
//             title: 'password too weak',
//             text: 'Do you want to continue',
//             icon: 'error',
//             confirmButtonText: 'OK'
//         });
//         return false;
//     }
//
//     if (pw1 !== pw2) {
//         Swal.fire({
//             title: 'Error! da',
//             text: 'Do you want to continue',
//             icon: 'error',
//             confirmButtonText: 'Cool'
//         });
//         return false;
//     } else {
//         return true;
//     }
// }
//
// $(document).on('keyup', '.password-strength', function (e) {
//     var _this = $(e.currentTarget);
//     var password = _this.val();
//     var strength = 0;
//     var lineBellow = _this.siblings('.line-strength');
//     if (!$(lineBellow).hasClass('show')) {
//         $(lineBellow).addClass('show');
//     }
//     if (password.length === 0 || password === "") {
//         lineBellow.removeClass('show');
//     }
//     if (password.length <= 7) {
//         lineBellow.removeClass('weak good strong');
//         lineBellow.addClass('short');
//         return 'Too short'
//     }
//     if (password.length > 7) strength += 1;
//     if (password.match(/([a-z].)|(.[a-z])/)) strength += 1;
//     if (password.match(/([A-Z].)|(.[A-Z])/)) strength += 1;
//     if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1;
//     if (password.match(/([^A-Za-z0-9])/)) strength += 1;
//
//     if (strength < 4) {
//         lineBellow.removeClass('short good strong');
//         lineBellow.addClass('weak');
//         return 'Weak'
//     } else if (strength === 4) {
//         lineBellow.removeClass('weak short strong');
//         lineBellow.addClass('good');
//         return 'Good'
//     } else {
//         lineBellow.removeClass('weak good short');
//         lineBellow.addClass('strong');
//         return 'Strong'
//     }
// });
//
// $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
// });

function wrongPassword() {
    Swal.fire({
        title: 'Wrong password',
        text: 'You have entered an incorrct password',
        // position: 'top-end',
        icon: 'error',
        // showConfirmButton: false,
        // timer: 1500
    });
}

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
