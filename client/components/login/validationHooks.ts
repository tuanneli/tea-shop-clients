export const useAuthValidation = (email: string, login: string, passwordFirst: string, passwordSecond: string) => {
    if (email === "") {
        return ("Необходимо ввести почту");
    }
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!regex.test(email)) {
        return ("Неверный формат почты")
    }
    if (login === "") {
        return ("Поле логин не может быть пустым");
    }
    if (passwordFirst !== passwordSecond) {
        return "Пароли не совпадают!";
    }
    if (passwordFirst.length < 8) {
        return "Длина пароля должна быть больше 8 символов";
    }
    return "";
}

export const useCheckIfEmail = (auth: string) => {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!regex.test(auth)) {
        return 'login'
    }
    return 'email';
}