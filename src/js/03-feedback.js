const form = document.querySelector('.feedback-form');
const KeyFeedbackFormState = "feedback-form-state";
let value = {};
console.log(value)
form.addEventListener("input", onClickInput);

function onClickInput(evt){
    localStorage.setItem(KeyFeedbackFormState, JSON.stringify(value))
    
   
}
