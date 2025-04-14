function generatePassword() {
    const length = document.getElementById("passwordLength").value || 12; // Длина пароля
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeSpecial = document.getElementById("includeSpecial").checked;

    const numbers = "0123456789";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const special = "%*?)@#$~";

    let chars = "";

    if (includeNumbers) chars += numbers;
    if (includeUppercase) chars += uppercase;
    if (includeLowercase) chars += lowercase;
    if (includeSpecial) chars += special;

    // Если не выбрано ни одного типа символов, используем все
    if (!chars) {
        alert("Select at least one character type!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById("password").value = password;
}

function copyPassword() {
    const passwordField = document.getElementById("password");

    if (passwordField.value) {
        passwordField.select();
        document.execCommand("copy");
        //alert("Password copied to clipboard! 🔑");
    } else {
        alert("Generate a password first! ⚡");
    }
}
