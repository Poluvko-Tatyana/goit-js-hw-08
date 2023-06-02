import throttle from 'lodash.throttle';
import '../css/03-feedback.css';
import '../css/03-feedback.css';

const form = document.querySelector('.feedback-form');
const KeyFeedbackFormState = "feedback-form-state";
let formValue = {};
form.addEventListener("input", throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
toForm()

function onFormInput(evt){
    formValue[evt.target.name] = evt.target.value;
    localStorage.setItem(KeyFeedbackFormState, JSON.stringify(formValue))
}

function onFormSubmit (evt){
    evt.preventDefault();
    localStorage.removeItem(KeyFeedbackFormState);
    evt.currentTarget.reset()
    formValue = {};
}

function toForm (){
    let formParsed = JSON.parse(localStorage.getItem(KeyFeedbackFormState)) || {};
    formValue = formParsed;
    if(formParsed){
    if(formParsed.email){
        form.elements.email.value = formParsed.email;
    }
    if(formParsed.message){
        form.elements.message.value = formParsed.message;
    }
   }
}

