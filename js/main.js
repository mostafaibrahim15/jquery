/// <reference types="../@types/jquery" />




$(function(){
    $('.sk-chase').fadeOut(1000,function(){
        $('.loading').fadeOut(1000,function(){
            $('body').css('overflow','auto');
            $('.loading').remove()
    })
})
})

$('.myBar').on('click',()=>{
    $('.myBar').fadeOut(()=>{
        $('.homeMenu').animate({width:'toggle'})
    })
})
$('.closeMark').on('click',()=>{
    $('.homeMenu').animate({width:'toggle',paddingInline:'toggle'},()=>{
        $('.myBar').fadeIn()
    })

})

$('.myBtn').on('click',(e)=>{
    $(e.target).next('.item').nextAll('.item').slideUp();
    $(e.target).next('.item').prevAll('.item').slideUp();

    $(e.target).next('.item').slideToggle()
})


let countDown= new Date('Nov 07,2024 00:00:00').getTime()
setInterval(()=>{
    let now= new Date().getTime()
    let distance= countDown- now;
    
    let Day= Math.floor(distance /(1000*60*60*24));
    let month= Math.floor(distance % (1000*60*60*24) / (1000*60*60));
    let min= Math.floor(distance %(1000*60*60)/(1000*60));
    let seconds= Math.floor(distance %(1000*60)/1000)
    
    $('.days').html(`${Day} D`);
    $('.months').html(`${month} H`);
    $('.min').html(`${min} M`);
    $('.seconds').html(`${seconds} S`);
    
},1000)


const massege= document.querySelector('#massege');
const charCounter= document.querySelector('#charCounter')

setInterval((e)=>{
    massege.addEventListener('input',(e)=>{
        let myStr= e.target.value;
        let value= myStr.split('')
        let count= 100;
        count -= value.length
        charCounter.innerHTML=count;
      if(value.length == 100 ||count < 0)
        {
            charCounter.innerHTML=`your available character finished `;
            massege.setAttribute('disabled','false')
        }
        massege.removeAttribute('disabled')
        value.pop(value.length-1)
    })  
},1000)
 
 
 
   
    
    
    



