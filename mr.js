const img = document.querySelectorAll('.img')
const exit = document.querySelector('.exit')

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function() {
        img[i].classList.add('image')
        exit.style = 'display: block;'
    })
    exit.addEventListener('click', function() {
        img[i].classList.remove('image')
        exit.style = 'display: none;'
    })
}