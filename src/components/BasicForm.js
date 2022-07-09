import {useState} from 'react';

const BasicForm = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState('');
  const [firstNameTouched, setFirstNameTouched] = useState(false);
  // const [enteredLastName, setEnteredLastName] = useState('');
  // const [enteredEmail, setEnteredEmail] = useState('');

  const firstNameIsValid = enteredFirstName !== '';
  const firstNameIsNotValid = !firstNameIsValid && firstNameTouched;

  const FNChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  }

  const FNBlurHandler = () => {
    setFirstNameTouched(true)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (firstNameIsNotValid) {
      return 
    }

    console.log(enteredFirstName);
    setEnteredFirstName('');
    setFirstNameTouched(false);

  }

  let formIsValid = false;
  if (firstNameIsValid) {
    formIsValid = true
  } 

const FNInputClasses = firstNameIsNotValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={FNInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
          type='text' 
          id='name' 
          onChange={FNChangeHandler} 
          onBlur={FNBlurHandler}
          value={enteredFirstName}
          />
          {firstNameIsNotValid && <p>Please enter a first name</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
