// Your Code Here
function start(){
    let firstAnswer  = window.prompt('Do you head left, or right?')
    if(firstAnswer === 'left'){
       goLeft()
    } else if(firstAnswer === 'right') {
        goRight()
    }
}

function goLeft(){
    let secondAnswer = window.prompt(`You come across a stray cat. 
    It scampers off down a small hole, just large enough for you to crawl through. 
    Do you follow it, or continue on your path?`)
    if(secondAnswer === 'back'){
        start()
    }
}

function follow(){
    let secondAnswer = window.prompt(`You follow the cat to a colony of cats,
     snuggled in a fort of warm blanketss and subsisting off of inexplicably warm soup.
     They are content with you staying, but you wonder if you should aler the world
     to this magical safe haven.`)
    if(secondAnswer === 'back'){
        start()
    }
}

function goRight(){
    let thirdAnswer = window.prompt(`You come across a stray cat. 
    It scampers off down a small hole, just large enough for you to crawl through. 
    Do you follow it, or continue on your path?`)
    if(thirdAnswer === 'back'){
        start()
    }
}

start()

