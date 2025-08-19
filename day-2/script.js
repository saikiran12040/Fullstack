function letsGo(){
    debugger;
    for(let i=0;i<5;i++){
        console.log('hello world')
    }
}

letsGo()
console.log('hello world')



// this something about static 

class Game{
    static score=0;
    constructor(){
        this.isPlaying=false;
    }

    startGame(){
        this.isPlaying=true;
        console.log('game started')
    }

    endGame(){
        this.isPlaying=false;
        Game.updateScore()
        console.log('game ended')
    }

    static updateScore(){
        Game.score+=10
        console.log(`score updated to ${Game.score}`)
    }
}

const game=new Game()
game.startGame()
game.endGame()
game.endGame()

// public and private variable 

class BankAccount{
    #balance=0;

    deposit(amount){
        this.#balance+=amount;
        console.log(`Deposited ${amount} to your account.`)
    }

    withdraw(amount){
        this.#balance-=amount;
        console.log(`Withdraw ${amount} from your account.now balance is ${this.#balance}`)
    }

    getBalance(){
        return this.#balance;
    }
}

let account=new BankAccount()
account.deposit(1000)
account.withdraw(500)
account.getBalance()

// fetch about this one 

fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body:JSON.stringify({
        title:'foo',
        body:'bar',
        userId:1
    }),
    headers:{
        'Content-type':'application/json; charset=UTF-8',
    }
}).then(res=>res.json()).then(data=>data.forEach(post=>console.log(post.title)))


// this is some problem when given month and year it will return the number of days in that month 
function isLeapYear(year){
    return (year%4===0 && year%100!==0) || (year%400===0);
}

function days(month,year){
    if(month===2){
        return isLeapYear(year) ? 29 :28;
    } else if ([4,6,9,11].includes(month)) {
        return 30;
    } else {
        return 31
    }
}

console.log(days(2,2020))
console.log(days(2,2021))
console.log(days(2,1700))


function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Usage:
window.addEventListener('resize', debounce(() => {
    console.log('Window resized!');
}, 500));function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Usage:
window.addEventListener('resize', debounce(() => {
    console.log('Window resized!');
}, 500));