alert("Hello, this is created by Harshit yadav.... please use it on pc 😊")

const tasks = document.getElementById('tasks')
const input = document.getElementById('input')
const buttonclick = document.getElementById('push')

let count = 0 ;
buttonclick.addEventListener('click' , function(e){
    if(input.value.length == 0){
        alert("Dont try to be oversmart....Enter your task ")
    }
    else{
        
        e.preventDefault() ;
        let lidiv = document.createElement('div') ;
        lidiv.classList.add('lidiv') ;

        let contentcontainer = document.createElement('div') ;
        contentcontainer.classList.add('contentcontainer') ;

        let btncontainer = document.createElement('div') ;
        btncontainer.classList.add('btncontainer') ;


        let newli = document.createElement('li') ;
        newli.classList.add('newliclass') ;
        newli.innerHTML = input.value ;

        let donebtn = document.createElement('button') ;
        donebtn.classList.add('donebutton') ;
        donebtn.innerHTML = 'Done' ;


        let delbutton = document.createElement('button') ;
        delbutton.classList.add(`deletebutton${count}`) ;
        delbutton.innerHTML = 'Remove' ;
        count++ ;


        
        contentcontainer.appendChild(newli) ;
        btncontainer.appendChild(donebtn) ;
        btncontainer.appendChild(delbutton) ;
        lidiv.appendChild(contentcontainer) ;
        lidiv.appendChild(btncontainer) ;

        tasks.appendChild(lidiv) ;
        console.log(newli) ;
        input.value = '' ;
        delbutton.addEventListener('click' , (e) => {
        e.preventDefault() ; 
            console.log(delbutton.getAttribute('class'))
            let address = delbutton.getAttribute('class') ;
            
            for( let i = 0 ; i <= count-1 ; i++){
                if(address == `deletebutton${i}`){
                    let element = document.querySelector(`.deletebutton${i}`) ;
                    element.parentNode.parentNode.remove() ;
                    console.log(`deletebutton${i}`)
                }
            }
            
         
        })

        donebtn.addEventListener('click' , (e) => {
            e.preventDefault() ;
            newli.style.textDecorationLine= "line-through" ; 
        })
    } 
})


