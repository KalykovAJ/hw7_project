import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css'
// import styled from 'styled-components';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('')
  };

//   const StytledDiv = styled.div`
    
//   margin: 0.5rem 0;


// & label { 
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${(props) => props.isvalid ? '' : 'red'};
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid #ccc;
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
//   border: 1px solid ${(props) => props.isvalid ? '' : 'red'};
//   box-shadow: 1px 1px 4px ${(props) => props.isvalid ? '' : 'red'};
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

//   `

  return (
    <form onSubmit={formSubmitHandler}>
        <div className={`${styles['form-control']} ${isValid ? '' : styles['inValid']}`}>
        <label>Course Goal</label>
        <input value={enteredValue} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
