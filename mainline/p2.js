// TOGGLE 'MUSCLY MEN' TEXT

const musclyMen = document.getElementById('muscle');
const openSign = document.getElementById('openSign');

musclyMen.addEventListener('mouseover', () => {
  document.body.style.backgroundImage = "url('assets/kiryu_nishiki.jpg')";
  secretTrigger.style.visibility = 'hidden';
  openSign.style.visibility = 'hidden';
})

musclyMen.addEventListener('mouseout', () => {
  document.body.style.backgroundImage = "url('assets/kamurocho_street_night.jpg')"
  secretTrigger.style.visibility = 'visible';
  openSign.style.visibility = 'visible';
})


//TOGGLE SECRET TEXT BOXES AND HIDDEN IMAGES

const secretTrigger = document.getElementById('glowingSign');
const secretTextBox = document.getElementById('secretText');
const textBox = document.getElementsByClassName('textBox')[0];
const ichiKiryu = document.getElementById('ichiKiryu');
const yakuzaSpan = document.getElementById('yakuzaSpan');
const yakuzaTextBox = document.getElementById('yakuzaTextBox');

secretTrigger.addEventListener('mouseover', () => {
  secretTextBox.style.visibility = 'visible';
  ichiKiryu.style.visibility = 'visible';
  textBox.style.color = 'black';
  musclyMen.style.color = 'black';
  yakuzaSpan.style.color = 'black';
})

secretTrigger.addEventListener('mouseout', () => {
  secretTextBox.style.visibility = 'hidden';
  ichiKiryu.style.visibility = 'hidden';
  textBox.style.color = null;
  musclyMen.style.color = null;
  yakuzaSpan.style.color = null;
})

yakuzaSpan.addEventListener('mouseover', () => {
  yakuzaTextBox.style.visibility = 'visible';
})

yakuzaSpan.addEventListener('mouseout', () => {
  yakuzaTextBox.style.visibility = 'hidden';
  yakuzaTextBox.style.color = null;
})


//TOGGLE 'MOVE FORWARD' BUTTON

const bg = document.querySelector('body.p2');
const button1 = document.getElementById('button1');
const p2Button2 = document.getElementById('p2Button2');
const kabukichoButton = document.getElementById('kabukichoButton');
let zoomLevel = 100;

function moveForward() {
 if(document.getElementsByClassName('textBox')[0].style.display == 'none')
  {
    p2Button2.style.display = 'block';

  }else{
    document.getElementsByClassName('textBox')[0].style.display = 'none';
    button1.style.visibility = 'hidden';
    secretTrigger.style.visibility = 'hidden';
    p2Button2.style.visibility = 'visible';
    // put fun little popup things here that show when you zoom in down the street
  }

  zoomLevel += 150;
  bg.style.backgroundPosition = '50% 35%';
  bg.style.backgroundSize = `${zoomLevel}%`;
  bg.style.transition = 'ease-in-out 0.5s';

  if (zoomLevel > 150) {
    zoomLevel = 100;
  }


  // mouse over "go inside" button > reveals kabukicho button and hides "go inside" button > when you click on the kabukicho button, "go inside" button is revealed again

  p2Button2.addEventListener('mouseover', () => {
    kabukichoButton.style.visibility = 'visible';
    p2Button2.style.visibility = 'hidden';
  }, { once: true })

  kabukichoButton.addEventListener('click', () => {
    p2Button2.style.visibility = 'visible';
  })

}