import React , {useEffect , useState} from 'react' ;

const validation = (values) => {
 let errors = {};
 if (!values.email) {
    errors.email = <li>Email is Required.</li>;
} 

if (!values.password) {
    errors.password = <li>Password is Required.</li>;
}else if(values.password.length < 5){
    errors.password = <li>Password must be more than five character.</li>;
}


  return errors;
}

export default validation