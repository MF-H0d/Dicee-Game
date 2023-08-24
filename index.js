function roll(){
    let randomNumber1 = Math.floor((Math.random() * 6) + 1)

let firstImage = 'images/dice' + randomNumber1 + '.png'

const target1 = document.querySelector('.img1')
const target2 = document.querySelector('.img2')

let randomNumber2 = Math.floor((Math.random() * 6) + 1)

let secondImage = 'images/dice' + randomNumber2 + '.png'

target1.setAttribute('src', firstImage)
target2.setAttribute('src', secondImage)

let winner = document.querySelector('h1') 

if(randomNumber1 > randomNumber2){
    winner.innerHTML = '🚩Player 1 Wins'
}else if(randomNumber1 < randomNumber2){
    winner.innerHTML = 'Player 2 Wins🚩'
}else {
    winner.innerHTML = 'Draw'
}
}

document.querySelector('button').addEventListener('click', roll)