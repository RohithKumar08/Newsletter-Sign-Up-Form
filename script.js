var toDisplay = document.getElementById('alert');
var container = document.getElementById('container');
var submit = document.getElementById('submit');
var error = document.getElementById('error-msg');
var input = document.getElementById('input');
var dismiss = document.getElementById('submit1');

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

submit.addEventListener('click', function(event){
    event.preventDefault();
    var email = input.value.trim();
    if(validateEmail(email)){
        container.style.transition = 'opacity 0.5s';
        toDisplay.style.transition = 'opacity 2s';
        container.style.opacity = '0';
        toDisplay.style.opacity = '1';
    } else {
        error.style.display = 'block';
        input.style.border = '1px solid hsl(4, 100%, 67%)';
        input.style.color = 'hsl(4, 100%, 67%)';
    }
});

dismiss.addEventListener('click', function(event){
    event.preventDefault();
    toDisplay.style.transition = 'opacity 0.5s';
    container.style.transition = 'opacity 2s';
    toDisplay.style.opacity = '0';
    container.style.opacity = '1'; 
    input.value = '';
});
    

