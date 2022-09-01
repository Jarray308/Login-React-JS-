import React , {useState , useEffect} from 'react';
import  './Form.css';
import validation from './validation';
const Signupform = ( { submitForm } ) => {
	
	const [values, setValues] = useState({
		email :"",
		password :"",
	});
	const [errors, setErrors] = useState({});
	const [dataIsCorrect, setDataIsCorrect] = useState(false);
	const handleChange = (event) => {
		setValues({...values,
			[event.target.name] : event.target.value,
		});
	  };
	const handelsubmit = (event)=>{
		event.preventDefault();
		setErrors(validation(values));
		setDataIsCorrect(true);

	};
	useEffect(() => {
		if (Object.keys(errors).length === 0 && dataIsCorrect ) {
			submitForm(true);
		}
	},[errors]);
	
	
  return (
    <div >
    <div class="container" id="container">
		<div class="form-container log-in-container">
			<form action="#">
				<h1>Login By Ayman </h1>
				<div class="social-container">
					<a href="#" class="social"><i class="fa fa-facebook fa-2x"></i></a>
					<a href="#" class="social"><i class="fab fa fa-twitter fa-2x"></i></a>
				</div>
				<span>or use your account</span>
				<div>
				<input type="email" name='email' className='input' placeholder="Email" value={values.email} onChange={handleChange} />
			   {errors.email && <p className='error'>{errors.email}</p>}
			   </div>
			   <div>
				<input type="password" name='password' className='input' value={values.password} onChange={handleChange} placeholder="Password"  />
				{errors.password && <p className='error'>{errors.password}</p>}
				</div>
				<a href="#"  >Forgot your password?</a>
			
				
				<button name='submit' className='submit' onClick={handelsubmit}   >Log In</button>
			</form>
		</div>
		<div class="overlay-container">
			<div class="overlay">
		
				<div class="overlay-panel overlay-right">
					
			
			

				</div>
			</div>
		</div>
	</div>
    </div>
  )
}



export default Signupform