// REVEAL PARAGRAPHS AS YOU CLICK THROUGH

// buttons to reveal paragraphs
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

// paragraph blocks
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');


button1.addEventListener('click', () => {
    button1.style.visibility = 'hidden';
    t2.style.visibility = 'visible';
    button2.style.visibility = 'visible';
})


// button2.addEventListener('click', () => {
//     button2.style.visibility = 'hidden';
//     t3.style.visibility = 'visible';
//     button3.style.visibility = 'visible';
// })