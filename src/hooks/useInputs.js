import {useState} from 'react';

const useInputs = (validateValue) =>  {
 const [enteredValue, setEnteredValue] = useState('');
 const [isTouched, setIsTouched] = useState(false);

 const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  }

  const inputBlurHandler = () => {
    setIsTouched(true)
  }
 const inputIsValid = validateValue(enteredValue);
 const hasError = !inputIsValid && isTouched;

 const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
 }

 return {
    value: enteredValue,
    inputChangeHandler,
    inputBlurHandler,
    inputIsValid,
    hasError,
    reset
 }

}

export default useInputs;