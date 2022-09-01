import React , {useState} from 'react'
import SignupformSuccess from './SignupformSuccess'
import Signupform from './Signupform';
const Form = () => {
  const [formIsSubmitted , setFormIsSubmitted] = useState(false);
  const submitForm =()=>{
    setFormIsSubmitted(true);

  };
  return (
    <div>
    {!formIsSubmitted ? (<Signupform submitForm= {submitForm} /> )
    : (
     <SignupformSuccess/>
     )}
    </div>
  );
};

export default Form;