//  general function to call utility function 
function utilityFunction(){
    removeScreen('home-screen')
    removeScreen('final-score')
    showScreen('play-ground')
    setTextDisplay('current-life', 5)
    setTextDisplay('score-update', 0)

    continuePlayGames()
    
}

function gameOver (){
    removeScreen('play-ground')
    showScreen('final-score')
    // ==================
    const lastScore = getUpdatedScore('score-update')
    console.log(lastScore,'yes i am last score');
    setTextDisplay('last-score', lastScore)

    // clear previous background color 
    const clearBgColor = setTextRandomAlphabet('show-Alphabet')
    removeKeyColor(clearBgColor)
}


