// console.log('hello')


// now it is about selectors 

let idselector=document.getElementById('king')
let classselector=document.getElementsByClassName('Hunter')
let tagSelector=document.getElementsByTagName('li')
// console.log(tagSelector)

let querySelector=document.querySelector('.leader')
let querySelectorAll=document.querySelectorAll('.Hunter')
// console.log(querySelectorAll)

let unparent=document.querySelector('ul')
// console.log(unparent.parentElement)
// console.log(unparent.children)
// console.log(unparent.childNodes)
// console.log(unparent.firstChild)
// console.log(unparent.lastChild)
// console.log(unparent.firstElementChild) 
// console.log(unparent.lastElementChild)

// let lichild=document.querySelector('.king')
// lichild.previousElementSibling ? console.log(lichild.previousElementSibling) : console.log('no previous element sibling') 
// console.log(lichild.previousElementSibling)
// console.log(lichild.nextElementSibling)
// console.log(lichild.previousSibling)
// console.log(lichild.nextSibling)


let addli=document.querySelector('ul')
let newli=document.createElement('li')
newli.textContent='Puma'
let newli2=document.createElement('li')
newli2.textContent='pig'
newli2.className='lazy'
newli2.id='lazyPig'

addli.appendChild(newli)
addli.appendChild(newli2)

// console.log(document.querySelector('ul').children)

let remove=document.querySelector('#lazyPig')
remove.remove()

let newli3=document.createElement('li')
newli3.textContent='Lynx'
newli3.id='sweetname'
addli.replaceChild(newli3,newli)


let parentNode=document.querySelector('html')
console.log(parentNode.parentNode)   // this is about parentNode 



let newli4=document.createElement('li')
newli4.innerHTML='<b>Caracal</b>'
let newli5=document.querySelector('#sweetname')
newli5.outerHTML='<b>Bobcat</b>'


addli.appendChild(newli4)
// addli.appendChild(newli5)   

// console.log(document.querySelector('ul').children)


let main=document.querySelector('.Hunter')
main.setAttribute('id','assassin')

// console.log(document.querySelector('#assassin').outerHTML)

for(let att of main.attributes){
    // console.log(`${att.name}=${att.value}`)
}

function movebox(button){
    let pos=0
    let elem=document.querySelector('#inside')
    let id=setInterval(myFunc,10)
    function myFunc(){
        if(pos==280){
            clearInterval(id)
        }
        pos++
        elem.style.top=pos+"px";
        elem.style.left=pos+"px";
    }
}


let btn=document.querySelector(".event")
btn.addEventListener('click',changeColor)

function changeColor(){
    btn.style.backgroundColor='blue'
}

// console.log(document.getElementsByTagName('div'))
// console.log(document.querySelectorAll('li'))

