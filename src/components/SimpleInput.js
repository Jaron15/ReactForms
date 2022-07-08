import {useEffect, useState} from 'react';

const SimpleInput = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('') 
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);


  const enteredNameIsValid = enteredName.trim() !== '';
// this creates a const to check against to see if the name is valid only when a user has actually entered something with 'touched' state
// and whether its valid (or not empty in this case) with the const defined in the line above 
const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

const enteredEmailIsValid = enteredEmail.includes('@');
const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched

// this is an alternative to creating a formIsValid 'state' to refer to 
//since its a simple boolean value you dont need a whole state to track it
//the same thing is being done with the enteredNameIsValid but its using the enteredNameState & touched state to set those booleans, this way you use one state to derive multiple 'pseudo states' from with less code  
let formIsValid = false;
if (enteredNameIsValid && enteredEmailIsValid) {
  formIsValid = true;
} 

  // updates enteredName state with every change using onChange 
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
//this doesnt use enteredName state like the others because it is being updated in the line above
//making it scheduled to be changed but not quite changed yet while in this function so you would be referencing an older state
    
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
  }

  // updates enteredNameTouched to true 
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  }
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

// updates the 'touched' state to identify user input/submission
    setEnteredNameTouched(true);

  // breaks out of function if the input is invalid
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    // this is the updated state enteredName
    console.log(enteredName);
    console.log(enteredEmail);

    setEnteredName('');
    setEnteredEmail('')
//you have to set touched back to false in order to not hit the nameInputIsInvalid requirements
//bc you setEnteredName to '' the app needs to know that thats not what the user is inputting rather just resetting the value    
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false)
  }
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}/>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input 
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}/>
      </div>
      {nameInputIsInvalid && <p className='error-text'>Name must not be empty</p>}
      {emailInputIsInvalid && <p className='error-text'>Please enter a valid email</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
