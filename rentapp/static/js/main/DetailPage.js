function init() {
    const image = document.querySelector('.images div');

    image.addEventListener('click', () => {
        location.href = 'detail.html';
    });
}

init();