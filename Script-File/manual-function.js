// // hide play screen page 
// function HidePlayScreen (playGames){
//     const homeScreen = document.getElementById(playGames)
//     homeScreen.classList.add('hidden')
//     return homeScreen
// }
// // show play ground screen 
// function showPlayGround(playGround){
//     const playStart = document.getElementById(playGround)
//     playStart.classList.remove('hidden')
//     return playStart
// }

// // show Alphabets in the screen 
// function showTheAlphabetScreen (){
//     // get create an alphabets in array 
//     const alphabetArray = "abcdefghijklmnopqrstuvwxyz"
//     const alphabets = alphabetArray.split('')
   
    
//     // get a Random Number 
//     const randomNumber = Math.random()*25
//     const randoms = Math.round(randomNumber)
//     const index = alphabets[randoms]
//     console.log('your current alphabet:',index);

//     // show the screen Random Alphabet 
//     const randomAlphabets = document.getElementById("show-Alphabet")
//     randomAlphabets.innerText = index

//     // function call 
//    showKeyboardColor(index) 
// }
// //  random alphabets color changes 
// function showKeyboardColor (elements){
//     const showKeyboard = document.getElementById(elements)
//     showKeyboard.classList.add('bg-yellow-500')
// }
// function removeBackgroundColor(elements){
//     const removeBgColor = document.getElementById(elements)
//     removeBgColor.classList.remove('bg-yellow-500')
// }
// // ===================== play The Games ===========================
// function keyUpPressButton (event){
//     const youPressButton = event.key
//     // console.log('you press the Button:',youPressButton);
    
//     const randomAlphabets = document.getElementById('show-Alphabet')
//     const displayShowKey = randomAlphabets.innerText
//     const currentAlphabet = displayShowKey.toLowerCase()
//     console.log(youPressButton,currentAlphabet);

//     // logic 
//     if(youPressButton === currentAlphabet){
//         console.log('you win');
//         removeBackgroundColor(currentAlphabet)
//         showTheAlphabetScreen()
//     }else{
//         console.log('you lost point');
//     }
// }
// document.addEventListener('keyup',keyUpPressButton)