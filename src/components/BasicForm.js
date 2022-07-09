import {useState} from 'react';
import useInputs from '../hooks/useInputs';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@')

const BasicForm = (props) => {
  const {
    value: enteredFirstName, 
    inputChangeHandler: fNHandler,
    inputBlurHandler: fBHandler,
    inputIsValid: firstNameIsValid,
    hasError: firstNameIsNotValid,
    reset: resetFn
  } = useInputs(isNotEmpty);
  const {
    value: enteredLastName, 
    inputChangeHandler: lNHandler,
    inputBlurHandler: lBHandler,
    inputIsValid: lastNameIsValid,
    hasError: lastNameIsNotValid,
    reset: resetLn
  } = useInputs(isNotEmpty);
  const {
    value: enteredEmail, 
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    inputIsValid: emailIsValid,
    hasError: emailIsNotValid,
    reset: resetEmail
  } = useInputs(isEmail)
  // const [enteredFirstName, setEnteredFirstName] = useState('');
  // const [firstNameTouched, setFirstNameTouched] = useState(false);
  // const [enteredLastName, setEnteredLastName] = useState('');
  // const [enteredEmail, setEnteredEmail] = useState('');

  // const firstNameIsValid = enteredFirstName.trim() !== '';
  // const firstNameIsNotValid = !firstNameIsValid && firstNameTouched;

  // const FNChangeHandler = (event) => {
  //   setEnteredFirstName(event.target.value);
  // }

  // const FNBlurHandler = () => {
  //   setFirstNameTouched(true)
  // }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (firstNameIsNotValid) {
      return 
    }

    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);
    resetFn();
    resetLn();
    resetEmail()
  }

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true
  } 

const FNInputClasses = firstNameIsNotValid ? 'form-control invalid' : 'form-control';
const LNInputClasses = lastNameIsNotValid ? 'form-control invalid' : 'form-control';
const EmailInputClasses = emailIsNotValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={FNInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
          type='text' 
          id='name' 
          onChange={fNHandler} 
          onBlur={fBHandler}
          value={enteredFirstName}
          />
          {firstNameIsNotValid && <p className='error-text'>Please enter a first name</p>}
        </div>
        <div className={LNInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
          type='text' 
          id='name' 
          onChange={lNHandler} 
          onBlur={lBHandler}
          value={enteredLastName} />
          {lastNameIsNotValid && <p className='error-text'>Please enter a last name</p>}
        </div>
      </div>
      <div className={EmailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='email' 
          id='email' 
          onChange={emailChangeHandler} 
          onBlur={emailBlurHandler}
          value={enteredEmail} />
           {emailIsNotValid && <p className='error-text'>Please enter a valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
