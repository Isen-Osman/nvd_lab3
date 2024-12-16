
// Your Vue code here....
new Vue({
    el: '#password',
    data: {
        password: '', // Поле за лозинка
    },
    computed: {
        // Проверка дали лозинката има голема буква
        has_uppercase() {
            return /[A-Z]/.test(this.password);
        },
        // Проверка дали лозинката има мала буква
        has_lowercase() {
            return /[a-z]/.test(this.password);
        },
        // Проверка дали лозинката има број
        has_number() {
            return /\d/.test(this.password);
        },
        // Проверка дали лозинката има специјален карактер
        has_special() {
            return /[!@#$%^&*(),.?":{}|<>]/.test(this.password);
        },
        // Порака (ја користиме за проверка на должина на лозинка)
        message() {
            return this.password || ''; // Безбедност ако лозинката е празна
        },
    },
});
