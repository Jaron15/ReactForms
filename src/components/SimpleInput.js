import useInput from '../hooks/useInput';

const SimpleInput = (props) => {
//here we destructure the functions and values defined in the useInput hook to be called 
//here in this file, when such field is changed the useInput hook will run.
//the thing that is passed into the hook is the validation function that is called as 'validateValue' in useInput.js (this must be passed in as its the only unique difference in how these inputs are handled)
//You dont pass in the value itself because that is defined by the enteredName/Email state which is set with the changehHandler functions defined in useInput
//the changeHandler functions take the event.target.value from the input in which we assign the changeHandler function on its onChange property 
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(value => value.includes('@'));

let formIsValid = false;
if (enteredNameIsValid && enteredEmailIsValid) {
  formIsValid = true;
} 

  const formSubmissionHandler = (event) => {
    event.preventDefault();

  // breaks out of function if either input is invalid
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    // this is the updated state enteredName
    console.log(enteredName);
    console.log(enteredEmail);
    resetNameInput();
    resetEmailInput();
  }
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';
  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}/>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input 
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}/>
      </div>
      {nameInputHasError && <p className='error-text'>Name must not be empty</p>}
      {emailInputHasError && <p className='error-text'>Please enter a valid email</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
