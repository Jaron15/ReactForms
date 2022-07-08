import {useState } from 'react';

//the function takes a validateValue function prop that we are passing in as an inline function in SimpleInput
const useInput = (validateValue) => {
//creates a value and touched general state
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

//creates the valid boolean defined by the inline function that is passed in on call, using the enteredValue state
//creates a hasError boolean 
    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

//sets the enteredValueState with what is passed in on the input that is using the valueChangeHandler on its onChange prop in SimpleInput
    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
      }

//sets the touched state of whatever is being passed into this hook to true when the input loses focus 
      const inputBlurHandler = (event) => {
        setIsTouched(true);
      }

//resets the values and touch prop of the input 
      const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
      }

//return each of functions to be used when the hook is called elsewhere
    return {
        value: enteredValue, 
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        isValid: valueIsValid,
        reset
    }
}

export default useInput;