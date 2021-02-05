function animatedForm(){
    const arrows =document.querySelectorAll(".fa-arrow-down");
    arrows.forEach(arrow=>{
        arrow.addEventListener('click',()=>{
            const input=arrow.previousElementSibling;
            const parent=arrow.parentElement;
            const nextForm=parent.nextElementSibling;
            console.log(parent);

            if(input.type==="text" && validateUser(input)){
                nextSlide(parent,nextForm);

            }else if(input.type==='email' && validateEmail(input)){
                    nextSlide(parent,nextForm);
            }
           
        });

    });
}

function validateUser(user){
    if(user.value.length<6){
        console.log("not enough characters");
        error('rgd(189,87,87)');
    }else{
        error('rgb(87,189,130)');
        return true;
    }
}

function validateEmail(email){
    const validation=/\S+@\S+\.\S+/;
    if(validation.test(email.value))
{
    return true;
}
}

function nextSlide(parent,nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('innactive');

}

function error(color){
    doccument.body.style.backgroundColor=color;
}
