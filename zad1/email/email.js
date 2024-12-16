new Vue({
    el: '#email',
    data: {
        email: '', // Поле за внесување е-пошта
    },
    computed: {
        // Проверка дали е-поштата е подолга од 5 карактери
        isValidLength() {
            return this.email.length > 5;
        },
        // Проверка дали има '@' симбол
        hasAtSymbol() {
            return this.email.includes('@');
        },
        // Проверка дали завршува со валиден домен
        hasValidDomain() {
            return /\.(com|org|net|edu|gov|io|mk)$/.test(this.email);
        },

    },
});