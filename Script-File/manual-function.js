// Hide for play Screen 
function hideScreen (element){
   const hidePlayScreen = document.getElementById(element)
   hidePlayScreen.classList.add('hidden')
   return hidePlayScreen
}
// show play-Ground screen 
function showScreen (element){
    const showPlayGroundScreen = document.getElementById(element)
    showPlayGroundScreen.classList.remove('hidden')
    return showPlayGroundScreen
}
// Show keyboard color change 
function showBgColorChange (element){
    const bgColor = document.getElementById(element)
    bgColor.classList.add('bg-yellow-500')
}
// Remove keyboard color change 
function removeBgColorChange (element){
    const bgRemoveColor = document.getElementById(element)
    bgRemoveColor.classList.remove('bg-yellow-500')
}

//   show the display Random alphabet 
function showDisplayRandomAlphabet (element){
    const showRandomAlphabet = document.getElementById(element)
    const setDisplay = showRandomAlphabet.innerText
    

    return showRandomAlphabet
}
// set display text 
function setDisplay (elementId,value){
    const elements = document.getElementById(elementId)
    elements.innerText = value

}
// Random get a Alphabet 
function randomAlphabets (){
    // get a random alphabets 
    const randomGetAlphabets = 'abcdefghijklmnopqrstuvwxyz'
    const newAlphabets  = randomGetAlphabets.split('')

    //    get a random number and also rounded 
    const randomNumber = Math.random() * 25
    const index = Math.round(randomNumber)
    const alphabet = newAlphabets[index]

    return alphabet
}
function updatedScore (element){
    const updateScores = document.getElementById(element)
    const scoresUpdate = updateScores.innerText
    const score = parseInt(scoresUpdate)
    return score
    console.log(score);
}