function callFunction(){
    hideScreen('home-screen')
    showScreen('play-ground')
    continueGames()
    
}

function continueGames (){
    // get a random Alphabet ==================> 
  const alphabet = randomAlphabets()

// set Display Random Alphabet ==========================>
  const showRandomAlphabet = showDisplayRandomAlphabet('show-Alphabet')
  const displayAlphabet =  showRandomAlphabet.innerText = alphabet

//   Change keyboard Background Color ===============> 
  showBgColorChange(displayAlphabet)
}

// document.addEventListener('keyup',function keyboardPressUpButton(event){
//     const keyPress = event.key

//     console.log(keyPress);
// })