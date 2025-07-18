const typingText=document.querySelector('.typing-text p')
const input=document.querySelector('.wrapper .input-field')
const time=document.querySelector('.time span b')
const mistakes=document.querySelector('.mistake span b')
const wpm=document.querySelector('.wpm span b')
const cpm=document.querySelector('.cpm span b')
const btn=document.querySelector('button')

let timer;
let maxTime=60;
let timeLeft=maxTime;
let charIndex=0
let mistake=0
let isTyping=false;


function loadParagraph(){
    const paragraph= [ " Avoid daydreaming about the years to come.","You are the most important person in your whole life.","Always be true to who you are, and ignore what other people have to say about you.","Always be true to who you are, and ignore what other people have to say about you.","Only demonstrate your strength when it’s really required.","Subscribe to Drop X Out"
];
    const randomIndex=Math.floor(Math.random()*paragraph.length)
    typingText.innerHTML='';
    for(const char of paragraph[randomIndex]){
        typingText.innerHTML+=`<span>${char}</span>`
    }
    typingText.querySelectorAll('span')[0].classList.add('active')
    document.addEventListener('keydown',()=>input.focus())
    typingText.addEventListener('click',()=>{
        input.focus()
    })
}

function initTyping(){
    let char=typingText.querySelectorAll('span')
    let typedChar=input.value.charAt(charIndex)
    if(charIndex<char.length && timeLeft>0){
        if(!isTyping){
            timer=setInterval(initTime,1000)
            isTyping=true;
        }

        if(char[charIndex].innerText===typedChar){
            char[charIndex].classList.add('correct')
            console.log('correct')
        } else {
            mistake++;
            char[charIndex].classList.add('incorrect')
            console.log('incorrect')
        }
        charIndex++;
        char[charIndex].classList.add('active');

        mistakes.innerHTML=mistake;
        cpm.innerHTML=charIndex-mistake;
    } else {
        clearInterval(timer);
        input.value='';
    }
}

function initTime(){
    if(timeLeft>0){
        timeLeft--;
        time.innerHTML=timeLeft;
        let wpmCount=Math.floor(((charIndex-mistake)/5)/(maxTime-timeLeft)*60);
        wpm.innerText=wpmCount
    } else {
        clearInterval(timer);
    }
}


function reset(){
    loadParagraph();
    clearInterval(timer);
    timeLeft=maxTime;
    time.innerHTML=timeLeft;
    charIndex=0;
    mistake=0;
    isTyping=false;
    input.value='';
    mistakes.innerText=0;
    wpm.innerText=0;
    cpm.innerText=0;
}

input.addEventListener('input',initTyping);
btn.addEventListener('click',reset);
loadParagraph();