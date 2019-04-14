const ErrorHandler = {
    show(error) {
        /*
        let el = document.getElementById('flashError');
        el.innerText = error.response.message;
        el.classList.remove('hidden');
        */
        alert(error.response.message);
    }
}

export default ErrorHandler;
