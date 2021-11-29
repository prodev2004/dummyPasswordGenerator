const input = document.querySelector('input');
const copy_btn = document.querySelector('.copy_btn');
const gen_btn = document.querySelector('.gen_btn');
const alert_ = document.querySelector('.alert');

const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', ':', '|', '<', '>', '?',
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

gen_btn.addEventListener('click', generaterRandom);
copy_btn.addEventListener('click', copy_to_clipboard);

function generaterRandom() {
    let password = '';
    for (let i = 0; i < 8; i++) {
        let random = chars[Math.floor(Math.random() * chars.length)];
        password += random;
    }
    input.value = password;
}

function copy_to_clipboard() {
    if (input.value === '') {
        alert('Input is empty...')
    } else {
        input.select();
        document.execCommand('Copy');
        alert_.classList.add('show_alert');
        document.getSelection().collapseToEnd();

        setTimeout(() => {
            alert_.classList.remove('show_alert');
        }, 3000)
    }
}
