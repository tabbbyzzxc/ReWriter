
const inputText = document.getElementById('inputText')
const outputText = document.getElementById('outputText')
const fixBnt = document.getElementById('fixBtn')

fixBnt.addEventListener("click", function() {
    if(inputText.value === ""){
        showError()
    }
    else{
        clearError()

        outputText.textContent = fixCode(inputText.value)
        console.log(inputText.value)
    }
});


function showError() {
    inputText.classList.add("error")
}

function clearError() {
    inputText.classList.remove("error");
}

function fixCode(code) {
    const letterMap = {
        'а': 'a',
        'с': 'c',
        'е': 'e',
        'о': 'o',
        'р': 'p',
        'х': 'x',
        'у': 'y',
        'к': 'k',
        'м': 'm',
        'н': 'h',
        'т': 't',
        'і': 'i',
        'I': 'l'
    };

    return inputText.value.split('').map(char => letterMap[char] || char).join('');
}
