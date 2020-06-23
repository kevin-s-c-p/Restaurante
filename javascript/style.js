let add=document.querySelector('#add');
let minus=document.querySelector('#minus');
let input=document.querySelector('input');

add.addEventListener('click',() =>{
    if(input.value<15)
        input.value=parseInt(input.value)+1;
});

minus.addEventListener('click',() =>{
    if(input.value>0)
        input.value=parseInt(input.value)-1;
});