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