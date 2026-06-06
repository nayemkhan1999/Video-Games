    // Remove 1st game play screen 
function removeScreen (element){
    const removeFirstScreen = document.getElementById(element)
    removeFirstScreen.classList.add('hidden')
    return removeFirstScreen
}
//  Show 2nd game play screen
function showScreen (element){
    const showSecondScreen = document.getElementById(element)
    showSecondScreen.classList.remove('hidden')
    return showSecondScreen
}
// ====================================== updated & Life Score 
function getUpdatedScore (elementId){
    const updatedScore = document.getElementById(elementId)
    const getScorePoint = updatedScore.innerText
    const finalScore = parseInt(getScorePoint)
    return finalScore
}
function setTextDisplay (elementId,value){
    const setElements = document.getElementById(elementId)
    setElements.innerText = value
}
// show the display random alphabet 
function setTextRandomAlphabet (element){
    const setElement = document.getElementById(element)
    const setAlphabets = setElement.innerText
    return setAlphabets
}
    // get a random alphabet 
function continuePlayGames (){
    const getRandomArray = 'abcdefghijklmnopqrstuvwxyz'
    const randomArray = getRandomArray.split('')

    // get a random number 
    const getRandomNumbers = Math.random() * 25
    const randomNumber = Math.round(getRandomNumbers)
    const randomAlphabet = randomArray[randomNumber]
    // console.log(randomAlphabet);

    // show the display random alphabet 
    const showAlphabet = document.getElementById('show-Alphabet')
    showAlphabet.innerText = randomAlphabet
    changeKeyColor(randomAlphabet)
    
    
}
    // Change keyboard keys background color  
function changeKeyColor (elements){
    const bgChangeColor = document.getElementById(elements)
    bgChangeColor.classList.add('bg-yellow-500')
}
 // Remove keyboard keys background color 
 function removeKeyColor(element){
    const bgRemoveColor = document.getElementById(element)
    bgRemoveColor.classList.remove('bg-yellow-500')
 }
    // Continue The Games 
document.addEventListener('keyup',function keyPressButton (event){
    const pressButton = event.key
    const showAlphabet = document.getElementById('show-Alphabet')
    const currentKey = showAlphabet.innerText
    const currentButton = currentKey.toLowerCase()
    // console.log(pressButton,currentButton);

    // logic correct to wrong 
    if (pressButton === currentButton){
        // ========================= update score
       const currentScore = getUpdatedScore('score-update')
        // ========================= increase score plus 1 
        const increaseScore = currentScore + 1        
        // ============================ show update score display 
       setTextDisplay('score-update',increaseScore)
        // ================================= remove bg-color and continue the game 
        removeKeyColor(currentButton)
        continuePlayGames()

    }else{
         // ========================= update life  score
        const currentLife = getUpdatedScore('current-life')
          // ========================= decreased score minus 1 
        const decreasedLife = currentLife - 1
        // ============================ show life update score display 
        setTextDisplay ('current-life',decreasedLife)

        if(decreasedLife === 0){
            gameOver()
        }



    }


})
