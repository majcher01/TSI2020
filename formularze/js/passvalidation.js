function checkPassword(form) {
    password1 = form.pass.value;
    password2 = form.pass2.value;

    if (password1 != password2) {
        alert("\nWprowadzone hasła się różnią");
        return false;
    }


}