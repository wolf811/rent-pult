const biEyeSlashEls = document.querySelectorAll('.bi-eye-slash');
biEyeSlashEls.forEach(el => {
    el.addEventListener('click', event => {
        if (event.target.classList.contains(el)) {
            event.target.classList.toggle(el);
            // event.target.classList.add('bi-eye');
        } else {
            // event.target.classList.add(el);
            event.target.classList.toggle('bi-eye');
        }
    })
})