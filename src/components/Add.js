import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { ValidateEmail, ValidatePhone } from './Tools';
import { Form, Col, Button } from 'react-bootstrap';

const Add = ( {usersApiData, setUsersApiData, handleClose, show} ) => {
    //Initializing user info with values of user passed as props
    const [userInfo, setUserInfo] = useState({
        role:'',
        city:'',
        address:'',
        phone:'',
        username:'',
        id:'',
        email:'',
        name:''
    });

    const [errors, setErrors] = useState({
        emailError: '',
        phoneError: '',
        usernameError: '',
        roleError: '',
        nameError: '',
        cityError: '',
        addressError: '',
    });

    const checkErrors = () => {
        if (errors.emailError || errors.phoneError || errors.usernameError ||
            errors.roleError || errors.nameError || errors.cityError ||
            errors.addressError || errors.addressError) {
            return true;
        }
        return false;
    }    

    const errorSetter = (errorKey, errorMessage) => {
        setErrors(errors => ({ ...errors, [`${errorKey}`]: errorMessage }));
    }

    //For Validations
    useEffect(() => {        
        if (!userInfo.email) {
            errorSetter("emailError", "Please provide an Email ID");
        } else if (userInfo.email && !ValidateEmail(userInfo.email)) {
            errorSetter("emailError", "Email needs to be in format: mysite@domain.com");
        } else {
            errorSetter("emailError", "");
        }

        if (!userInfo.phone) {
            errorSetter("phoneError", "Please provide a Phone Number");
        } else if (userInfo.phone && !ValidatePhone(userInfo.phone)) {
            errorSetter("phoneError", "Phone numbers needs to be in format: XXX XXX XXXX (Dashes/Dots/Spaces optional)");
        } else {
            errorSetter("phoneError", "");
        }

        if (!userInfo.name) {
            errorSetter("nameError", "Please provide a Name");
        } else {
            errorSetter("nameError", "");
        }

        if (!userInfo.username) {
            errorSetter("usernameError", "Please provide a Username");
        } else {
            errorSetter("usernameError", "");
        }

        if (!userInfo.role) {
            errorSetter("roleError", "Please provide a Role");
        } else {
            errorSetter("roleError", "");
        }

        if (!userInfo.city) {
            errorSetter("cityError", "Please provide a City");
        } else {
            errorSetter("cityError", "");
        }

        if (!userInfo.address) {
            errorSetter("addressError", "Please provide an Address");
        } else {
            errorSetter("addressError", "");
        }
    }, [userInfo])

    const addUser = () => {   
        //Extracting users array
        const usersArray = usersApiData.users;                               

        if (!checkErrors()) {
            if (window.confirm(`Add User (Name: ${userInfo.name}) - Confirm`)) {
                usersArray.push(userInfo); //This also pushes new object into the array
                
                const updatedUsersApiData = {
                    success: usersApiData.success,
                    users: usersArray
                }
                setUsersApiData(updatedUsersApiData);                
                handleClose();
            }
        } else {
            window.alert("Please fix the errors before submitting.");
        }
    }

    return (                    
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a New User</Modal.Title>                        
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Row>                                
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" onChange={e => setUserInfo(prevState => ({
                                        ...prevState,
                                        name: e.target.value
                                    }))} />
                                    <Form.Text className="text-danger">
                                        {errors.nameError}
                                    </Form.Text>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Username" onChange={e => setUserInfo(prevState => ({
                                        ...prevState,
                                        username: e.target.value
                                    }))} />
                                    <Form.Text className="text-danger">
                                        {errors.usernameError}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email" onChange={e => setUserInfo(prevState => ({
                                        ...prevState,
                                        email: e.target.value
                                    }))} />
                                    <Form.Text className="text-danger">
                                        {errors.emailError}
                                    </Form.Text>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Phone Number" onChange={e => setUserInfo(prevState => ({
                                        ...prevState,
                                        phone: e.target.value
                                    }))} />
                                    <Form.Text className="text-danger">
                                        {errors.phoneError}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Address" onChange={e => setUserInfo(prevState => ({
                                        ...prevState,
                                        address: e.target.value
                                    }))} />
                                    <Form.Text className="text-danger">
                                        {errors.addressError}
                                    </Form.Text>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter City" onChange={e => setUserInfo(prevState => ({
                                        ...prevState,
                                        city: e.target.value
                                    }))} />
                                    <Form.Text className="text-danger">
                                        {errors.cityError}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridRole">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Role" onChange={e => setUserInfo(prevState => ({
                                        ...prevState,
                                        role: e.target.value
                                    }))} />
                                    <Form.Text className="text-danger">
                                        {errors.roleError}
                                    </Form.Text>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Button variant="primary" onClick={() => addUser()}>Add</Button>
                            </Form.Row>
                        </Form>
                    </Modal.Body>
                </Modal>
    );
}

export default Add;