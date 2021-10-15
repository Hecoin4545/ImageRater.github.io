
let button = document.querySelector('.btn');
button.addEventListener('click' , function() {
})
let stars = document.querySelectorAll('.star-font');
let hiddenText = document.querySelector('.hiddenText')
for( i = 0;i<stars.length;i++){
    let het= stars[i].starValue = (i+1)
    stars[i].addEventListener('click' ,function(){
        hiddenText.innerHTML = 'You Have Rated' + ' ' + het + ' ' + 'Star'
     setTimeout(() => {
        location.reload()  
    },1000); 
    
         if(het == 2){
            stars[1].classList.add('yellow')
            stars[0].classList.add('yellow')
        }else if(het == 3){
            stars[2].classList.add('yellow')
            stars[0].classList.add('yellow')
            stars[1].classList.add('yellow')
        }else if(het == 4){
            stars[3].classList.add('yellow')
            stars[1].classList.add('yellow')
            stars[0].classList.add('yellow')
            stars[2].classList.add('yellow')
        }else if(het == 5){
            stars[4].classList.add('yellow')
            stars[3].classList.add('yellow')
            stars[1].classList.add('yellow')
            stars[0].classList.add('yellow')
            stars[2].classList.add('yellow')
        }else{
            stars[0].classList.add('yellow')

        }
})
}
