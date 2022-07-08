import {useEffect, useRef, useState} from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('Name Is Valid!');
    }
  }, [enteredNameIsValid])


  // updates enteredName state with every change using onChange 
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

// updates the 'touched' state to identify user input/submission
    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true)
    // this is the updated state enteredName
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    // this is what is in the input that has the nameInputRef at the time of submission
    console.log(enteredValue);

    
    setEnteredName('');
  }

// this creates a const to check against to see if the name is valid only when a user has actually entered something 
// bc enteredNameIsValid is set to false by default, you need to make sure that the validity youre checking
// is actually user input and not just the default state. This allows us the isValid check as a dependency as well we do that with the 'touched' state
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}/>
      </div>
      {nameInputIsInvalid && <p className='error-text'>Name must not be empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
