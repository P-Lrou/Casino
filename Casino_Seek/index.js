"use strict"

let number = document.querySelector('.number')
let interfaces = document.querySelector('.interface')
let numberLimit = document.querySelector('.numberLimit')
let actual_mode = document.querySelectorAll('.actual_mode button')
let button_easy_fake = document.querySelector('.button_easy_fake')
let button_medium_fake = document.querySelector('.button_medium_fake')
let button_hard_fake = document.querySelector('.button_hard_fake')

let cards = document.querySelector('.cards');
let anim = [{ transform: 'rotateY(0deg)' }, { transform: 'rotateY(180deg)' }]
let anim2 = [{ transform: 'rotate(35deg)' }, { transform: 'rotate(0deg)' }]

let overlay = document.querySelector(".overlay")
let menu_start = document.querySelector('.menu_start')
let menu_win = document.querySelector('.menu_win')
let number_menu = document.querySelector('.number_menu')
let menu_loose = document.querySelector('.menu_loose')
let button_mode = document.querySelectorAll('.mode button')
let button_easy = document.querySelector('.button_easy')
let button_medium = document.querySelector('.button_medium')
let button_hard = document.querySelector('.button_hard')
let button_play = document.querySelector('.button_play')

let nb_cards = 65
let limit = 65
let score = 0
let tab = []
let mode = 1
let cheat = false
tab.length = nb_cards


/***********************MENU**************************/
const menu = (elm) => {
    if (elm === 'start') {
        overlay.style.display = "block"
        menu_start.style.display = "block"
        menu_win.style.display = "none"
        interfaces.style.display = "none"
        menu_loose.style.display = "none"
        number_menu.innerHTML = (score)
        numberLimit.innerHTML = (limit)
        cheat = false
        reset_cards()
        play()
    }
    else if (elm === 'win') {
        interfaces.style.opacity = "0"
        cards.style.opacity = "0"
        setTimeout(() => {
            reset_cards()
        }, 500)
        overlay.style.display = "block"
        overlay.style.transition = "all 2s";
        overlay.style.transform = "translateY(-100%)";
        setTimeout(() => {
            menu_start.style.display = "none"
            menu_loose.style.display = "none"
            menu_win.style.display = "block"
            overlay.style.transform = "translateY(0%)";
        }, 500)
        number_menu.innerHTML = (score)
        numberLimit.innerHTML = (limit)
        cheat = false
        play()
    }
    else if (elm === 'loose') {
        interfaces.style.opacity = "0"
        cards.style.opacity = "0"
        setTimeout(() => {
            reset_cards()
        }, 500)
        overlay.style.display = "block"
        overlay.style.transition = "all 2s";
        overlay.style.transform = "translateY(-100%)";
        setTimeout(() => {
            menu_start.style.display = "none"
            menu_loose.style.display = "block"
            menu_win.style.display = "none"
            overlay.style.transform = "translateY(0%)";
        }, 500)
        number_menu.innerHTML = (score)
        numberLimit.innerHTML = (limit)
        cheat = false
        play()
    }

}
/****************************************************/

/*******************RESET CARDS**********************/
const reset_cards = () => {
    cards.innerHTML = ''
}
/****************************************************/


/*********************PLAY*************************/
const play = () => {
    const callback = () => {
        score = 0
        number.innerHTML = (score)
        overlay.style.transition = "all 2s";
        overlay.style.transform = "translateY(0%)";
        setTimeout(() => {
            overlay.style.transform = "translateY(-100%)";
        }, 0)
        setTimeout(() => {
            interfaces.style.opacity = "1"
            cards.style.opacity = "1"
            interfaces.style.display = "block"
            create_cards()
        }, 1000)
        setTimeout(() => {
            overlay.style.display = "none"
        }, 2000)
    }
    button_play.addEventListener("click", callback)
    button_play.addEventListener("click", () => {
        button_play.removeEventListener("click", callback)
    })
}

/****************************************************/


/*****************TABLE CREATION*********************/
const create_tab = () => {
    for (let i = 0; i < tab.length; i++) {
        tab[i] = 0
    }
}
/****************************************************/


/****************INTRUDER CREATION*******************/
const create_intruder = () => {
    let rep = Math.floor(Math.random() * tab.length)
    tab[rep] = 1
}
/****************************************************/


/*****************CARDS CREATION*********************/
const create_cards = () => {
    create_tab()
    create_intruder()
    for (let i = 0; i < tab.length; i++) {
        let newElt = document.createElement('class')
        if (tab[i] === 0) {
            newElt.classList.add("square");
        }
        else if (tab[i] === 1) {
            newElt.classList.add("square");
            newElt.setAttribute('id', 'intru');
        }
        setTimeout(() => {
            cards.appendChild(newElt);
            newElt.animate(anim2, 100)
            let back_card = document.createElement('class')
            back_card.classList.add("back_card")
            newElt.appendChild(back_card)
        }, 500 + i * 50)
    }
    setTimeout(() => {
        let squares = document.querySelectorAll('.square')
        click(squares)
    }, 3700)
    console.log('Tab Start')
    console.log(tab)
}
/****************************************************/


/*******************CLICK**********************/
const click = (squares) => {
    if (mode === 1) {
        m1(squares)
    }
    else if (mode === 2) {
        m2(squares)
    }
    else if (mode === 3) {
        m3(squares)
    }
}
const m1 = (squares) => {
    squares.forEach(elmt => {
        elmt.addEventListener("click", () => {
            let r = Math.floor(Math.random() * (4))
            if (elmt.className === "square" && elmt.id !== "intru" && r === 0) {
                elmt.animate(anim, 500)
                setTimeout(() => {
                    elmt.style.transform = 'rotateY(180deg)'
                    elmt.style.backgroundImage = "url('pictures/normal.png')";
                }, 250)
                elmt.style.pointerEvents = "none";
                score++
                number.innerHTML = (score)
            }
            else if (elmt.className === "square" && elmt.id !== "intru" && r === 1) {
                elmt.animate(anim, 500)
                setTimeout(() => {
                    elmt.style.transform = 'rotateY(180deg)'
                    elmt.style.backgroundImage = "url('pictures/normal2.png')";
                }, 250)
                elmt.style.pointerEvents = "none";
                score++
                number.innerHTML = (score)
            }
            else if (elmt.className === "square" && elmt.id !== "intru" && r === 2) {
                elmt.animate(anim, 500)
                setTimeout(() => {
                    elmt.style.transform = 'rotateY(180deg)'
                    elmt.style.backgroundImage = "url('pictures/normal3.png')";
                }, 250)
                elmt.style.pointerEvents = "none";
                score++
                number.innerHTML = (score)
            }
            else if (elmt.className === "square" && elmt.id !== "intru" && r === 3) {
                elmt.animate(anim, 500)
                setTimeout(() => {
                    elmt.style.transform = 'rotateY(180deg)'
                    elmt.style.backgroundImage = "url('pictures/normal4.png')";
                }, 250)
                elmt.style.pointerEvents = "none";
                score++
                number.innerHTML = (score)
            }
            else if (elmt.id === "intru") {
                squares.forEach(elm2 => {
                    elm2.style.pointerEvents = "none"
                })
                elmt.animate(anim, 500)
                setTimeout(() => {
                    elmt.style.scale = "1.5"
                    elmt.style.transform = 'rotateY(180deg)'
                    elmt.style.backgroundImage = "url('pictures/gold_card.png')";
                }, 300)
                elmt.style.transform = "scale(1.2)"
                score++
                number.innerHTML = (score)
                setTimeout(() => {
                    menu('win')
                }, 1500)
            }
        })
    });
}
const m2 = (squares) => {
    let squares2 = squares
    let intru = document.querySelector('#intru')
    squares.forEach(elmt => {
        elmt.addEventListener("click", () => {
            let r = Math.floor(Math.random() * (4))
            if (score === limit - 1) {
                if (elmt.id === "intru") {
                    squares2.forEach(elm2 => {
                        elm2.style.pointerEvents = "none"
                    })
                    elmt.animate(anim, 500)
                    setTimeout(() => {
                        elmt.style.scale = "1.5"
                        elmt.style.transform = 'rotateY(180deg)'
                        elmt.style.backgroundImage = "url('pictures/gold_card.png')";
                    }, 300)
                    elmt.style.pointerEvents = "none";
                    elmt.style.transform = "scale(1.2)"
                    score++
                    number.innerHTML = (score)
                    setTimeout(() => {
                        menu('win')
                    }, 1500)
                }
                else if (elmt.className === "square" && elmt.id !== "intru" && r === 0) {
                    elmt.animate(anim, 500)
                    setTimeout(() => {
                        elmt.style.transform = 'rotateY(180deg)'
                        elmt.style.backgroundImage = "url('pictures/normal.png')";
                    }, 250)
                    elmt.style.pointerEvents = "none";
                    score++
                    number.innerHTML = (score)
                }
                else if (elmt.className === "square" && elmt.id !== "intru" && r === 1) {
                    elmt.animate(anim, 500)
                    setTimeout(() => {
                        elmt.style.transform = 'rotateY(180deg)'
                        elmt.style.backgroundImage = "url('pictures/normal2.png')";
                    }, 250)
                    elmt.style.pointerEvents = "none";
                    score++
                    number.innerHTML = (score)
                }
                else if (elmt.className === "square" && elmt.id !== "intru" && r === 2) {
                    elmt.animate(anim, 500)
                    setTimeout(() => {
                        elmt.style.transform = 'rotateY(180deg)'
                        elmt.style.backgroundImage = "url('pictures/normal3.png')";
                    }, 250)
                    elmt.style.pointerEvents = "none";
                    score++
                    number.innerHTML = (score)
                }
                else if (elmt.className === "square" && elmt.id !== "intru" && r === 3) {
                    elmt.animate(anim, 500)
                    setTimeout(() => {
                        elmt.style.transform = 'rotateY(180deg)'
                        elmt.style.backgroundImage = "url('pictures/normal4.png')";
                    }, 250)
                    elmt.style.pointerEvents = "none";
                    score++
                    number.innerHTML = (score)
                }
                squares2.forEach(elm2 => {
                    elm2.style.pointerEvents = "none"
                })
                intru.animate(anim, 500)
                setTimeout(() => {
                    intru.style.scale = "1.5"
                    intru.style.transform = 'rotateY(180deg)'
                    intru.style.backgroundImage = "url('pictures/gold_card.png')";
                }, 300)
                intru.style.pointerEvents = "none";
                intru.style.transform = "scale(1.2)"
                number.innerHTML = (score)
                setTimeout(() => {
                    menu('loose')
                }, 1500)
            }
            else if (elmt.className === "square" && elmt.id !== "intru" && r === 0) {
                elmt.animate(anim, 500)
                setTimeout(() => {
                    elmt.style.transform = 'rotateY(180deg)'
                    elmt.style.backgroundImage = "url('pictures/normal.png')";
                }, 250)
                elmt.style.pointerEvents = "none";
                score++
                number.innerHTML = (score)
            }
            else if (elmt.className === "square" && elmt.id !== "intru" && r === 1) {
                elmt.animate(anim, 500)
                setTimeout(() => {
                    elmt.style.transform = 'rotateY(180deg)'
                    elmt.style.backgroundImage = "url('pictures/normal2.png')";
                }, 250)
                elmt.style.pointerEvents = "none";
                score++
                number.innerHTML = (score)
            }
            else if (elmt.className === "square" && elmt.id !== "intru" && r === 2) {
                elmt.animate(anim, 500)
                setTimeout(() => {
                    elmt.style.transform = 'rotateY(180deg)'
                    elmt.style.backgroundImage = "url('pictures/normal3.png')";
                }, 250)
                elmt.style.pointerEvents = "none";
                score++
                number.innerHTML = (score)
            }
            else if (elmt.className === "square" && elmt.id !== "intru" && r === 3) {
                elmt.animate(anim, 500)
                setTimeout(() => {
                    elmt.style.transform = 'rotateY(180deg)'
                    elmt.style.backgroundImage = "url('pictures/normal4.png')";
                }, 250)
                elmt.style.pointerEvents = "none";
                score++
                number.innerHTML = (score)
            }
            else if (elmt.id === "intru") {
                squares2.forEach(elm2 => {
                    elm2.style.pointerEvents = "none"
                })
                elmt.animate(anim, 500)
                setTimeout(() => {
                    elmt.style.scale = "1.5"
                    elmt.style.transform = 'rotateY(180deg)'
                    elmt.style.backgroundImage = "url('pictures/gold_card.png')";
                }, 300)
                elmt.style.pointerEvents = "none";
                elmt.style.transform = "scale(1.2)"
                score++
                number.innerHTML = (score)
                setTimeout(() => {
                    menu('win')
                }, 1500)
            }
        })
    });
}
const m3 = (squares) => {
    let squares2 = squares
    squares.forEach(elmt => {
        elmt.addEventListener("click", () => {
            let intru = document.querySelector('#intru')
            let r = Math.floor(Math.random() * (4))
            if (score === limit - 1) {
                if (elmt.id === "intru") {
                    squares2.forEach(elm2 => {
                        elm2.style.pointerEvents = "none"
                    })
                    elmt.animate(anim, 500)
                    setTimeout(() => {
                        elmt.style.scale = "1.5"
                        elmt.style.transform = 'rotateY(180deg)'
                        elmt.style.backgroundImage = "url('pictures/gold_card.png')";
                    }, 300)
                    elmt.style.pointerEvents = "none";
                    elmt.style.transform = "scale(1.2)"
                    score++
                    number.innerHTML = (score)
                    setTimeout(() => {
                        menu('win')
                    }, 1500)
                }
                else if (elmt.className === "square" && elmt.id !== "intru" && r === 0) {
                    elmt.animate(anim, 500)
                    setTimeout(() => {
                        elmt.style.transform = 'rotateY(180deg)'
                        elmt.style.backgroundImage = "url('pictures/normal.png')";
                    }, 250)
                    elmt.classList.add("turn");
                    elmt.style.pointerEvents = "none";
                    score++
                    number.innerHTML = (score)
                }
                else if (elmt.className === "square" && elmt.id !== "intru" && r === 1) {
                    elmt.animate(anim, 500)
                    setTimeout(() => {
                        elmt.style.transform = 'rotateY(180deg)'
                        elmt.style.backgroundImage = "url('pictures/normal2.png')";
                    }, 250)
                    elmt.classList.add("turn");
                    elmt.style.pointerEvents = "none";
                    score++
                    number.innerHTML = (score)
                }
                else if (elmt.className === "square" && elmt.id !== "intru" && r === 2) {
                    elmt.animate(anim, 500)
                    setTimeout(() => {
                        elmt.style.transform = 'rotateY(180deg)'
                        elmt.style.backgroundImage = "url('pictures/normal3.png')";
                    }, 250)
                    elmt.classList.add("turn");
                    elmt.style.pointerEvents = "none";
                    score++
                    number.innerHTML = (score)
                }
                else if (elmt.className === "square" && elmt.id !== "intru" && r === 3) {
                    elmt.animate(anim, 500)
                    setTimeout(() => {
                        elmt.style.transform = 'rotateY(180deg)'
                        elmt.style.backgroundImage = "url('pictures/normal4.png')";
                    }, 250)
                    elmt.classList.add("turn");
                    elmt.style.pointerEvents = "none";
                    score++
                    number.innerHTML = (score)
                }
                squares2.forEach(elm2 => {
                    elm2.style.pointerEvents = "none"
                })
                intru.animate(anim, 500)
                setTimeout(() => {
                    intru.style.scale = "1.5"
                    intru.style.transform = 'rotateY(180deg)'
                    intru.style.backgroundImage = "url('pictures/gold_card.png')";
                }, 300)
                intru.style.pointerEvents = "none";
                intru.style.transform = "scale(1.2)"
                number.innerHTML = (score)
                setTimeout(() => {
                    menu('loose')
                }, 1500)
            }
            else if (elmt.className === "square" && elmt.id !== "intru" && r === 0) {
                elmt.animate(anim, 500)
                setTimeout(() => {
                    elmt.style.transform = 'rotateY(180deg)'
                    elmt.style.backgroundImage = "url('pictures/normal.png')";
                }, 250)
                elmt.classList.add("turn");
                elmt.style.pointerEvents = "none";
                score++
                number.innerHTML = (score)
            }
            else if (elmt.className === "square" && elmt.id !== "intru" && r === 1) {
                elmt.animate(anim, 500)
                setTimeout(() => {
                    elmt.style.transform = 'rotateY(180deg)'
                    elmt.style.backgroundImage = "url('pictures/normal2.png')";
                }, 250)
                elmt.classList.add("turn");
                elmt.style.pointerEvents = "none";
                score++
                number.innerHTML = (score)
            }
            else if (elmt.className === "square" && elmt.id !== "intru" && r === 2) {
                elmt.animate(anim, 500)
                setTimeout(() => {
                    elmt.style.transform = 'rotateY(180deg)'
                    elmt.style.backgroundImage = "url('pictures/normal3.png')";
                }, 250)
                elmt.classList.add("turn");
                elmt.style.pointerEvents = "none";
                score++
                number.innerHTML = (score)
            }
            else if (elmt.className === "square" && elmt.id !== "intru" && r === 3) {
                elmt.animate(anim, 500)
                setTimeout(() => {
                    elmt.style.transform = 'rotateY(180deg)'
                    elmt.style.backgroundImage = "url('pictures/normal4.png')";
                }, 250)
                elmt.classList.add("turn");
                elmt.style.pointerEvents = "none";
                score++
                number.innerHTML = (score)
            }
            else if (elmt.id === "intru") {
                squares2.forEach(elm2 => {
                    elm2.style.pointerEvents = "none"
                })
                elmt.animate(anim, 500)
                setTimeout(() => {
                    elmt.style.scale = "1.5"
                    elmt.style.transform = 'rotateY(180deg)'
                    elmt.style.backgroundImage = "url('pictures/gold_card.png')";
                }, 300)
                elmt.style.pointerEvents = "none";
                elmt.style.transform = "scale(1.2)"
                score++
                number.innerHTML = (score)
                setTimeout(() => {
                    menu('win')
                }, 1500)
            }
        })
    });
    const actual = () => {
        setTimeout(() => {
            for (let i = 0; i < tab.length; i++) {
                if (tab[i] === 1) {
                    tab[i] = 0
                }
            }
            let rep = Math.floor(Math.random() * tab.length)
            for (let i = 0; i < tab.length; i++) {
                if (squares[rep].className !== "square turn") {
                    tab[rep] = 1
                }
            }
            for (let i = 0; i < tab.length; i++) {
                if (tab[i] === 1) {
                    document.querySelector('#intru').id = 'ant'
                    squares[i].setAttribute('id', 'intru');
                }
            }
            console.log(tab)
            actual()
        }, 1000)
    }
    actual()
}
/****************************************************/


/*********************MODE***************************/
button_easy.addEventListener('click', () => {
    mode = 1
    button_mode.forEach(elmt => {
        elmt.style.borderColor = "gold"
        elmt.style.color = "gold"
    })
    actual_mode.forEach(elmt => {
        elmt.style.borderColor = "gold"
        elmt.style.color = "gold"
    })
    button_easy.style.borderColor = "red"
    button_easy.style.color = "red"
    button_easy_fake.style.borderColor = "red"
    button_easy_fake.style.color = "red"
    limit = 64
    numberLimit.innerHTML = (limit)
})
button_medium.addEventListener('click', () => {
    mode = 2
    button_mode.forEach(elmt => {
        elmt.style.borderColor = "gold"
        elmt.style.color = "gold"
    })
    actual_mode.forEach(elmt => {
        elmt.style.borderColor = "gold"
        elmt.style.color = "gold"
    })
    button_medium.style.borderColor = "red"
    button_medium.style.color = "red"
    button_medium_fake.style.borderColor = "red"
    button_medium_fake.style.color = "red"
    limit = 20
    numberLimit.innerHTML = (limit)
})
button_hard.addEventListener('click', () => {
    mode = 3
    button_mode.forEach(elmt => {
        elmt.style.borderColor = "gold"
        elmt.style.color = "gold"
    })
    actual_mode.forEach(elmt => {
        elmt.style.borderColor = "gold"
        elmt.style.color = "gold"
    })
    button_hard.style.borderColor = "red"
    button_hard.style.color = "red"
    button_hard_fake.style.borderColor = "red"
    button_hard_fake.style.color = "red"
    limit = 20
    numberLimit.innerHTML = (limit)
})
/****************************************************/


/*********************KONAMI CODE********************/
let allowedKeys = {
    37: 'left', 38: 'up', 39: 'right', 40: 'down', 65: 'a', 66: 'b'
};
let konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
let konamiCodePosition = 0;
document.addEventListener('keydown', e => {
    let key = allowedKeys[e.keyCode];
    let requiredKey = konamiCode[konamiCodePosition];
    if (key == requiredKey && mode !== 3) {
        konamiCodePosition++;
        if (konamiCodePosition == konamiCode.length) {
            activateCheats();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});
let activateCheats = () => {
    let intru = document.querySelector('#intru')
    cheat = true
    intru.style.backgroundImage = "url('pictures/cards_cheats.png')";
    alert('Cheat Activated')
}
/****************************************************/


/*********************START**************************/
menu('start')
/****************************************************/