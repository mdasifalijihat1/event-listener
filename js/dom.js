
//  backgroudng color onclick tag use 

// const makRedBtn = document.getElementById('make-Red');
// makRedBtn.onclick = makRed;
// function makRed(){
//     document.body.style.backgroundColor='red';
// }

//  function onclick system 

// function makeRed(){
//     document.body.style.backgroundColor ='red'
//   }
// function MakeBlack(){
// document.body.style.backgroundColor = 'black'
// }

// // option -03 
// const maekBlueButton = document.getElementById('Make-Blue')
// maekBlueButton.onclick= makeBlue;
// function makeBlue(){
//     document.body.style.backgroundColor ='blue'
// }
//  option - 03 other 

const maekBlueButton = document.getElementById('make-blue');
maekBlueButton.onclick= function makeBlue(){
    document.body.style.backgroundColor ='blue'
}
//  addEventListener 
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makepink )
function makepink(){
   document.body.style.backgroundColor = 'pink'
}
const makeButton = document.getElementById('make-red')
makeButton.addEventListener('click', makered)
function makered(){
   document.body.style.backgroundColor='red'
}

const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makegreen(){
   document.body.style.backgroundColor='green'
})