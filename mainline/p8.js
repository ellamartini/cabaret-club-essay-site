// REVEAL PARAGRAPHS AS YOU CLICK THROUGH

// buttons to reveal paragraphs
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

// paragraph blocks
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');


button1.addEventListener('click', () => {
    button1.style.visibility = 'hidden';
    t2.style.visibility = 'visible';
    button2.style.visibility = 'visible';
})


button2.addEventListener('click', () => {
    button2.style.visibility = 'hidden';
})