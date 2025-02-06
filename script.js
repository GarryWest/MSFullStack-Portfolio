document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

const images = document.querySelectorAll('img');

for (const image of images) {
    image.addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '1000';

        const modalImage = document.createElement('img');
        modalImage.src = this.src;
        modalImage.style.maxWidth = '90%';
        modalImage.style.maxHeight = '90%';

        modal.appendChild(modalImage);
        document.body.appendChild(modal);

        modal.addEventListener('click', function() {
            document.body.removeChild(modal);
        });
    });
}

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let valid = true;

    if (name.value.trim() === '') {
        valid = false;
        name.classList.add('error');
    } else {
        name.classList.remove('error');
    }

    if (email.value.trim() === '' || !/\S+@\S+\.\S+/.test(email.value)) {
        valid = false;
        email.classList.add('error');
    } else {
        email.classList.remove('error');
    }

    if (message.value.trim() === '') {
        valid = false;
        message.classList.add('error');
    } else {
        message.classList.remove('error');
    }

    if (valid) {
        form.submit();
    }
});