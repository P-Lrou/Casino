"use strict"

let gauge1 = document.querySelector('.gauge1')
let gauge1_front = document.querySelector('.gauge1 .gauge1_front')
let count_gauge1 = 0
let player1 = document.querySelector('.number1')

let gauge2 = document.querySelector('.gauge2')
let gauge2_front = document.querySelector('.gauge2 .gauge2_front')
let count_gauge2 = 0
let player2 = document.querySelector('.number2')

let overlay = document.querySelector(".overlay")
let menu_start = document.querySelector('.menu_start')
let p1_win = document.querySelector('.p1_win')
let p2_win = document.querySelector('.p2_win')
let button_play = document.querySelector('.button_play')
let interfaces = document.querySelector('.interface')
let TimeClick1 = 2
let TimeClick2 = 2

player1.innerHTML = (count_gauge1)
player2.innerHTML = (count_gauge2)
gauge1_front.style.height = `0vh`
gauge2_front.style.height = `0vh`


/***********************GAME**************************/
const create_game = () => {
    document.addEventListener('keyup', (event) => {
        if (event.key === " " && count_gauge1 === 99) {
            document.querySelector('.roulette2').style.animation = "rotation 1s infinite running";
            count_gauge1 += 1
            player1.innerHTML = (count_gauge1)
            gauge1_front.style.height = `${0.7 * count_gauge1}vh`
            setTimeout(() => {
                menu('win1')
            }, 500)
        }
        else if (event.key === "Enter" && count_gauge2 === 99) {
            document.querySelector('.roulette2').style.animation = "rotation 1s infinite running";
            count_gauge2 += 1
            player2.innerHTML = (count_gauge2)
            gauge2_front.style.height = `${0.7 * count_gauge2}vh`
            setTimeout(() => {
                menu('win2')
            }, 500)
        }
        else if (event.key === " " && count_gauge1 < 100 && count_gauge2 < 100) {
            document.querySelector('.roulette2').style.animation = "rotation 0.5s infinite running";
            TimeClick1 = 2
            count_gauge1 += 1
            player1.innerHTML = (count_gauge1)
            gauge1_front.style.height = `${0.7 * count_gauge1}vh`
            if (count_gauge1 > 0 && count_gauge1 < 25) {
                gauge1_front.style.backgroundColor = "#9E1711"
            }
            else if (count_gauge1 > 26 && count_gauge1 < 50) {
                gauge1_front.style.backgroundColor = "#B12E21"
            }
            else if (count_gauge1 > 51 && count_gauge1 < 75) {
                gauge1_front.style.backgroundColor = "#C34632"
            }
            else if (count_gauge1 > 76 && count_gauge1 < 100) {
                gauge1_front.style.backgroundColor = "#D65D42"
            }
        }
        else if (event.key === "Enter" && count_gauge2 < 100 && count_gauge1 < 100) {
            document.querySelector('.roulette2').style.animation = "rotation 0.5s infinite running";
            TimeClick2 = 2
            count_gauge2 += 1
            player2.innerHTML = (count_gauge2)
            gauge2_front.style.height = `${0.7 * count_gauge2}vh`
            if (count_gauge2 > 0 && count_gauge2 < 25) {
                gauge2_front.style.backgroundColor = "#174978"
            }
            else if (count_gauge2 > 26 && count_gauge2 < 50) {
                gauge2_front.style.backgroundColor = "#2F5F8A"
            }
            else if (count_gauge2 > 51 && count_gauge2 < 75) {
                gauge2_front.style.backgroundColor = " #46769B"
            }
            else if (count_gauge2 > 76 && count_gauge2 < 100) {
                gauge2_front.style.backgroundColor = "#5E8CAD"
            }
        }
    });
    callback_delay()
}
/****************************************************/


/***********************MENU**************************/
const menu = (elm) => {
    if (elm === 'start') {
        overlay.style.display = "block"
        menu_start.style.display = "block"
        interfaces.style.display = "none"
        gauge1.style.display = "none"
        gauge2.style.display = "none"
        p1_win.style.display = "none"
        p2_win.style.display = "none"
        play()
    }
    else if (elm === 'win1') {
        interfaces.style.opacity = "0"
        gauge1.style.opacity = "0"
        gauge2.style.opacity = "0"
        overlay.style.display = "block"
        overlay.style.transition = "all 2s";
        overlay.style.transform = "translateY(-100%)";
        setTimeout(() => {
            overlay.style.transform = "translateY(0%)";
            menu_start.style.display = "none"
            p1_win.style.display = "block"
            p2_win.style.display = "none"
        }, 500)
        play2()
    }
    else if (elm === 'win2') {
        interfaces.style.opacity = "0"
        gauge1.style.opacity = "0"
        gauge2.style.opacity = "0"
        overlay.style.display = "block"
        overlay.style.transition = "all 2s";
        overlay.style.transform = "translateY(-100%)";
        setTimeout(() => {
            overlay.style.transform = "translateY(0%)";
            menu_start.style.display = "none"
            p1_win.style.display = "none"
            p2_win.style.display = "block"
        }, 500)
        play2()
    }
}
/****************************************************/


/*********************PLAY*************************/
const play = () => {
    const callback = () => {
        overlay.style.transition = "all 2s";
        overlay.style.transform = "translateY(0%)";
        setTimeout(() => {
            overlay.style.transform = "translateY(-100%)";
        }, 0)
        setTimeout(() => {
            overlay.style.display = "none"
            interfaces.style.opacity = "1"
            interfaces.style.display = "block"
            gauge1.style.display = "block"
            gauge2.style.display = "block"
            gauge1.style.opacity = "1"
            gauge2.style.opacity = "1"
            create_game()
        }, 2000)
    }

    button_play.addEventListener("click", callback)
    button_play.addEventListener("click", () => {
        button_play.removeEventListener("click", callback)
    })
}

const play2 = () => {
    const callback = () => {
        overlay.style.transition = "all 2s";
        overlay.style.transform = "translateY(0%)";
        setTimeout(() => {
            overlay.style.transform = "translateY(-100%)";
        }, 0)
        setTimeout(() => {
            overlay.style.display = "none"
            interfaces.style.opacity = "1"
            gauge1.style.display = "block"
            gauge2.style.display = "block"
            gauge1.style.opacity = "1"
            gauge2.style.opacity = "1"
        }, 2000)
    }
    button_play.addEventListener("click", callback)
    button_play.addEventListener("click", () => {
        reset()
        button_play.removeEventListener("click", callback)
    })
}
/****************************************************/


/*********************RESET************************/
const reset = () => {
    count_gauge1 = 0
    count_gauge2 = 0
    player1.innerHTML = (count_gauge1)
    player2.innerHTML = (count_gauge2)
    gauge1_front.style.height = `${0.7 * count_gauge1}vh`
    gauge2_front.style.height = `${0.7 * count_gauge2}vh`
}
/****************************************************/


/*********************START**************************/
menu('start')
/****************************************************/


/*********************RETURN*************************/
const callback_delay = () => {
    setTimeout(() => {
        if (count_gauge1 >= 0 && count_gauge2 >= 0) {
            TimeClick1 -= 0.4
            TimeClick2 -= 0.4
            if (TimeClick1 <= 0 && TimeClick2 <= 0) {
                document.querySelector('.roulette2').style.animation = "rotation 0.5s infinite paused";
            }
            if (TimeClick1 <= 0) {
                isNotClickPlayer1()
            }
            if (TimeClick2 <= 0) {
                isNotClickPlayer2()
            }
        }
        callback_delay()
    }, 200)
}

const isNotClickPlayer1 = () => {
    count_gauge1 -= 1
    if (count_gauge1 < 0) {
        count_gauge1 = 0
    }
    if (count_gauge1 > 0 && count_gauge1 < 25) {
        gauge1_front.style.backgroundColor = "#9E1711"
    }
    else if (count_gauge1 > 26 && count_gauge1 < 50) {
        gauge1_front.style.backgroundColor = "#B12E21"
    }
    else if (count_gauge1 > 51 && count_gauge1 < 75) {
        gauge1_front.style.backgroundColor = "#C34632"
    }
    else if (count_gauge1 > 76 && count_gauge1 < 100) {
        gauge1_front.style.backgroundColor = "#D65D42"
    }
    player1.innerHTML = (count_gauge1)
    gauge1_front.style.height = `${0.7 * count_gauge1}vh`
}

const isNotClickPlayer2 = () => {
    count_gauge2 -= 1
    if (count_gauge2 < 0) {
        count_gauge2 = 0
    }
    if (count_gauge2 > 0 && count_gauge2 < 25) {
        gauge2_front.style.backgroundColor = "#174978"
    }
    else if (count_gauge2 > 26 && count_gauge2 < 50) {
        gauge2_front.style.backgroundColor = "#2F5F8A"
    }
    else if (count_gauge2 > 51 && count_gauge2 < 75) {
        gauge2_front.style.backgroundColor = " #46769B"
    }
    else if (count_gauge2 > 76 && count_gauge2 < 100) {
        gauge2_front.style.backgroundColor = "#5E8CAD"
    }
    player2.innerHTML = (count_gauge2)
    gauge2_front.style.height = `${0.7 * count_gauge2}vh`
}
/****************************************************/