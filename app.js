(function(){
    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn');
    let cl=document.querySelector('.btn-clear');
    let eq=document.querySelector('.btn-equal');
    buttons.forEach((button)=>{
        button.addEventListener("click",function(e){
            let value=e.target.dataset.num;
            screen.value=screen.value+value;
        })
    });
    eq.addEventListener('click',function(e){
        if(screen.value===""){
            screen.value="";
        }
        else{
            let answer=eval(screen.value);
            screen.value=answer;
        }
    })
    cl.addEventListener('click',function(e){
        screen.value="";
    })
})();