window.onload = function () {
    const interval = setInterval(() => {
        const header = document.querySelector('.h70RQ');

        if (header) {
            clearInterval(interval);
        
            header.style.height = '100%';
            header.style.top = 0;
            header.style.width = '100%';
        }
    }, 1000);
}


