function callFunction(){
    hideScreen('home-screen')
    showScreen('play-ground')
    setDisplay('current-life', 5)
    setDisplay('score-update', 0)
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
// game over Function 
function gameOver (){
  hideScreen('play-ground')
  showScreen('final-score')

 const finalScoreUpdate = updatedScore('score-update')
 setDisplay('last-score',finalScoreUpdate)

 const clearTextColor = showDisplayRandomAlphabet('show-Alphabet')
 const textRemoveColor = clearTextColor.innerText
 removeBgColorChange(textRemoveColor)
 
}

// get key press ==========>
document.addEventListener('keyup',function keyboardPressUpButton(event){
    const keyPress = event.key

     const showRandomAlphabet = showDisplayRandomAlphabet('show-Alphabet')
     const displayAlphabet =  showRandomAlphabet.innerText
     const currentAlphabet = displayAlphabet.toLowerCase() 
    // console.log(keyPress,currentAlphabet);
    
   

    if(keyPress === currentAlphabet){
      // score increase update 
        const scoreUpdate = updatedScore('score-update')
        const increaseScore = scoreUpdate + 1
        // set display increase Score 
        const setDisplay = showDisplayRandomAlphabet('score-update')
        setDisplay.innerText = increaseScore

        // Remove / Hide Background Color
        removeBgColorChange(currentAlphabet)
        continueGames()
        
    }else{
      // Score Life End 
        const lifeScore = updatedScore('current-life')
        const lifeEnd = lifeScore - 1
        // set Display Life End 
        const setDisplayLife = showDisplayRandomAlphabet('current-life')
        setDisplayLife.innerText = lifeEnd

        if(lifeEnd === 0){
          gameOver()
        }else{
          // console.log('hello');
        }


    }
})