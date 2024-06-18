const icon = document.querySelectorAll('.icon-heart');

icon.forEach((e) => {
    e.addEventListener('click', () => {
        e.firstElementChild.classList.toggle('icon-filled');
    })
})