const showScore = document.querySelector('#score')
const showTime = document.querySelector('#time')
const ball = document.querySelector("#ball")
const end = document.querySelector('#preend')
let score = 0
let time = 60

function gen() {
    //generate a random cord
    let randX = Math.floor(Math.random() * 500);
    let randY = Math.floor(Math.random() * 500);
    ball.style.left = `${randY}px`
    ball.style.top = `${randX}px`
}
//add score
ball.addEventListener('click', e => {
        score += 100
        showScore.innerHTML = `${score}`
        ball.style.op
    })
    //move the ball
const generetion = setInterval(() => {
        gen()
    }, 1000)
    //set itme
const conuttime = setInterval(() => {
    time -= 1
    showTime.innerHTML = `${time}`
    if (time == 0) {
        clearInterval(conuttime)
        clearInterval(generetion)
        showTime.innerHTML = `${time}`
        alert(`your score is ${score}`)
    }
}, 1000);

const replay = document.querySelector('#replay')

replay.addEventListener('click', e => {
    location.reload()
})