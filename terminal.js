

/* ------------------ stuff for terminal typing -----------------*/
async function typeSentence(eleRef, type) {
sentence = eleRef.dataset.text;
delay = 40;
console.log(delay)
console.log(type)
if (type == 'log') {

    delay = 20;

} else if (type == 'full-log') {

    delay = 5;
    

}
const letters = sentence.split("");
let i = 0;
while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
}
return;
}


function waitForMs(ms) {
return new Promise(resolve => setTimeout(resolve, ms))
}

/*----------------------------------------------------------------- */

// when player presses enter on the input
rollInput = document.getElementsByClassName('rollinput')[0];
rollInput.addEventListener("keypress", async function(event) {
// If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        hideLoop = document.getElementsByClassName('terminal-text');

        await (async function() {
            
            for (passed of hideLoop) {

                passed.innerHTML = '';
    
            
            }
    
            rollInput.value = '';
            rollInput.style.display = 'none';
            return "hello"
        
        })();
        
        await (async function() {
            //give me time to turn the computer
            return new Promise(resolve => setTimeout(resolve, 1000));
        })()
        await typeSentence(document.getElementById('welcome-message'), 'log');
        await typeSentence(document.getElementById('full-log-name'), 'full-log');
        await (async function() {
            
            document.getElementById('log-name-break').style.display = 'block';
            return "hello"
        
        })();
        await typeSentence(document.getElementById('full-log-1'), 'full-log');
        
        await typeSentence(document.getElementById('user-arrow'));
        await (async function() {
            
            console.log('asdasf')
            document.getElementsByClassName('rollinput')[0].value = '';
            document.getElementsByClassName('rollinput')[0].style.display = 'inline-block';
            document.getElementsByClassName('rollinput')[0].focus();
            return "hello"
        
        })();
    }
}); 



window.onload = async function() {
    
    await (async function() {
        //give me time to turn the computer
        return new Promise(resolve => setTimeout(resolve, 1000));
    })()
    await typeSentence(document.getElementById('welcome-message'), 'log');
    await typeSentence(document.getElementById('security_1'));
    await typeSentence(document.getElementById('total-files'));
    await typeSentence(document.getElementById('log-1') , 'log');
    await typeSentence(document.getElementById('roll'));
    await typeSentence(document.getElementById('what-was-roll'));
    await typeSentence(document.getElementById('user-arrow'));
    await (async function() {
        
        console.log('asdasf')
        document.getElementsByClassName('rollinput')[0].value = '';
        document.getElementsByClassName('rollinput')[0].style.display = 'inline-block';
        document.getElementsByClassName('rollinput')[0].focus();
        return "hello"
    
    })();
    
}



