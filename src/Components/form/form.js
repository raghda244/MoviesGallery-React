import { useState } from "react";
import { Button, Form } from "react-bootstrap"

const FormObject =()=>{
    var usernameRegex=/^\S{1,}$/
    var emailRegex=/^[\w]+@([\w])+(\.[\w]{2,3})+$/
    var passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#%*])[A-Za-z\d@$#%*]{8,}$/
    const [user, setUser] = useState({
        Name:"",
        userName: "",
        email: "",
        password:"",
        confirmPassword:""
      });
    
    const [errors, setErrors] = useState({
        NameErrors:null,
        userNameErrors: null,
        emailErrors: null,
        passwordErrors:null,
        confirmPasswordErrors:null
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
        if (e.target.name == "Name") {
            if (e.target.value.length == 0) {
                setErrors({
                    ...errors,
                    NameErrors: "this field is required"
                });
            }
            else {
                setErrors({
                    ...errors,
                    NameErrors: null
                });
            }
        }
        if (e.target.name == "userName") {
            if (e.target.value.length == 0) {
                setErrors({
                    ...errors,
                    userNameErrors: "this field is required"
                });
            }
            else if(!usernameRegex.test(e.target.value))
            {
                setErrors({
                    ...errors,
                    userNameErrors: "username shouldnot contain space"
                });
            }
            else {
                setErrors({
                    ...errors,
                    userNameErrors: null
                });
            }
        }
        if (e.target.name == "email") {
            if (e.target.value.length == 0) {
                setErrors({
                    ...errors,
                    emailErrors: "this field is required"
                });
            }
            else if(!emailRegex.test(e.target.value))
            {
                setErrors({
                    ...errors,
                    emailErrors: "please enter right format ex: abc@xyz.com"
                });
            }
            else {
                setErrors({
                    ...errors,
                    emailErrors: null
                });
            }
        }
        if(e.target.name == "password"){
            if (e.target.value.length == 0) {
                setErrors({
                    ...errors,
                    passwordErrors: "this field is required"
                });
            }
            else if(!passwordRegex.test(e.target.value))
            {
                setErrors({
                    ...errors,
                    passwordErrors: "please enter at least one uppercase letter, one lowercase letter, one number and one special character"
                });
            }
            else {
                setErrors({
                    ...errors,
                    passwordErrors: null
                });
            }
        }
        if(e.target.name == "confirmPassword"){
            if (e.target.value.length == 0) {
                setErrors({
                    ...errors,
                    confirmPasswordErrors: "this field is required"
                });
            }
            else if(e.target.value!=user.password)
            {
                setErrors({
                    ...errors,
                    confirmPasswordErrors: "password doesnot match"
                });
            }
            else {
                setErrors({
                    ...errors,
                    confirmPasswordErrors: null
                });
            }
        }
        
    }

    return(
        <>
        <Form className="my-5 border p-5">
        
        <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control name="Name" value={user.Name} onChange={(e) => {
                handleChange(e);
              }}/>
        <small className="text-danger">{errors.NameErrors}</small>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" value={user.email} onChange={(e) => {
                handleChange(e);
              }}/>
        <small className="text-danger">{errors.emailErrors}</small>
        </Form.Group>


        <Form.Group className="mb-3">
        <Form.Label>User Name</Form.Label>
        <Form.Control name="userName" value={user.userName} onChange={(e) => {
                handleChange(e);
              }} />
        <small className="text-danger">{errors.userNameErrors}</small>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" value={user.password} onChange={(e) => {
                handleChange(e);
              }}/>
        <small className="text-danger">{errors.passwordErrors}</small>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control name="confirmPassword" type="password" value={user.confirmPassword} onChange={(e) => {
                handleChange(e);
              }}/>
        <small className="text-danger">{errors.confirmPasswordErrors}</small>
        </Form.Group>


        <Button variant="success" type="submit">Register</Button>
        </Form>
        </>
    )
}

export default FormObject