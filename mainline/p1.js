// REVEAL PARAGRAPHS AS YOU CLICK THROUGH

// buttons to reveal paragraphs
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');

// paragraph blocks
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');


button1.addEventListener('click', () => {
    button1.style.visibility = 'hidden';
    t2.style.visibility = 'visible';
    button2.style.visibility = 'visible';
})

button2.addEventListener('click', () => {
    button2.style.visibility = 'hidden';
    t3.style.visibility = 'visible';
    button3.style.visibility = 'visible';
    button4.style.visibility = 'visible';
})


// HOVER REVEALS

const hoverHere = document.getElementById('hoverHere');
const hoverHereText = document.getElementById('hoverHereText');
const yearInReviewImg = document.getElementById('yearInReviewImg');
const yirTextBox = document.getElementById('yirTextBox');
const yirHours = document.getElementById('yirHours');
const welcomeMatSpan = document.getElementById('welcomeMatSpan');
const welcomeMatImg = document.getElementById('welcomeMat');


hoverHere.addEventListener('mouseover', () => {
    hoverHereText.style.visibility = 'visible';
})

hoverHere.addEventListener('mouseout', () => {
    hoverHereText.style.visibility = 'hidden';
})

yirHours.addEventListener('mouseover', () => {
    yearInReviewImg.style.visibility = 'visible';
    yirTextBox.style.visibility = 'visible';
})

yirHours.addEventListener('mouseout', () => {
    yearInReviewImg.style.visibility = 'hidden';
    yirTextBox.style.visibility = 'hidden';
})

welcomeMatSpan.addEventListener('mouseover', () => {
    welcomeMatImg.style.visibility = 'visible';
})