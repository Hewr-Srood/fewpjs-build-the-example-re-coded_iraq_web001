// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.getElementById('modal');
const hearts = document.getElementsByClassName('like-glyph')
const likeBtns = document.getElementsByClassName('like')
const  modalMessage = document.querySelector('#modal-message');



document.addEventListener('DOMContentLoaded',hidesModalError);
function heartChange(e){
  let heart=e.target;
  heart.innerText== EMPTY_HEART
  ?(heart.innerText= FULL_HEART, heart.classList.add('activated-heart'))
  :(heart.innerText= EMPTY_HEART, heart.classList.remove('activated-heart'))
}
function hidesModalError() {
  modal.classList.add("hidden")
}
function showModalError() {
  modal.classList.remove("hidden")
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
