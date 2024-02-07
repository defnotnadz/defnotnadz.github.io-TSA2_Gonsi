function moveBox(color) {
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');

    box1.style.transition = 'top 1.3s ease-in-out, background-color 1.3s ease-in-out, opacity 1.3s ease-in-out';
    box2.style.transition = 'top 1.3s ease-in-out, background-color 1.3s ease-in-out, opacity 1.3s ease-in-out';

    if (box1.style.top === '300px') {
        box1.style.top = '-300px';
        box1.style.opacity = '0'; 
        box2.style.setProperty('--border-color', color);
        box2.style.backgroundColor = color;
        box2.style.top = '300px';
        box2.style.opacity = '1'; 
        box1.style.backgroundColor = 'white';
    } else {
        box1.style.top = '300px';
        box1.style.opacity = '1'; 
        box1.style.setProperty('--border-color', color);
        box1.style.backgroundColor = color;
        box2.style.top = '-300px';
        box2.style.opacity = '0';
        box2.style.backgroundColor = 'white';
    }
}

function handleTransitionEnd(box) {
    box.style.transition = 'none';
}