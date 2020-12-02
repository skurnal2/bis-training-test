import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { UsersDataContext } from '../App';
import { Form, Col, Button } from 'react-bootstrap';

const Update = ({ handleClose, show, user }) => {

    //Initializing user info with values of user passed as props
    const [userInfo, setUserInfo] = useState({
        role: user.role,
        city: user.city,
        address: user.address,
        phone: user.phone,
        username: user.username,
        id: user.id,
        email: user.email,
        name: user.name
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

    //Email Validator Function from W3Resource
    function ValidateEmail(mail) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
            return (true)
        }
        return (false)
    }

    //Phone Number Validator (North American) from W3Resource
    function ValidatePhone(phone) {
        var expression = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        if ((phone.match(expression))) {
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

    const updateUser = (usersApiData, setUsersApiData) => {
        if (!checkErrors()) {
            if (window.confirm(`Are you sure you want to update User: ${user.name} (with Id: ${user.id})?`)) {
                const newUsersList = [];
                usersApiData.users.forEach(user => {
                    if (user.id === userInfo.id) {
                        newUsersList.push(userInfo);
                    } else {
                        newUsersList.push(user);
                    }
                });

                const updatedUsersApiData = {
                    success: usersApiData.success,
                    users: newUsersList
                }
                setUsersApiData(updatedUsersApiData);
                handleClose();
            }
        } else {
            window.alert("Please fix the errors before submitting.");
        }
    }

    return (
        <UsersDataContext.Consumer>
            {({ usersApiData, setUsersApiData }) => (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit - {user.name} (Id: {user.id})</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridId">
                                    <Form.Label>Id</Form.Label>
                                    <Form.Control type="text" readOnly defaultValue={userInfo.id} onChange={e => setUserInfo(prevState => ({
                                        ...prevState,
                                        id: e.target.value
                                    }))} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" defaultValue={userInfo.name} onChange={e => setUserInfo(prevState => ({
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
                                    <Form.Control type="text" placeholder="Enter Username" defaultValue={userInfo.username} onChange={e => setUserInfo(prevState => ({
                                        ...prevState,
                                        username: e.target.value
                                    }))} />
                                    <Form.Text className="text-danger">
                                        {errors.usernameError}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email" defaultValue={userInfo.email} onChange={e => setUserInfo(prevState => ({
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
                                    <Form.Control type="text" placeholder="Enter Phone Number" defaultValue={userInfo.phone} onChange={e => setUserInfo(prevState => ({
                                        ...prevState,
                                        phone: e.target.value
                                    }))} />
                                    <Form.Text className="text-danger">
                                        {errors.phoneError}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Address" defaultValue={userInfo.address} onChange={e => setUserInfo(prevState => ({
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
                                    <Form.Control type="text" placeholder="Enter City" defaultValue={userInfo.city} onChange={e => setUserInfo(prevState => ({
                                        ...prevState,
                                        city: e.target.value
                                    }))} />
                                    <Form.Text className="text-danger">
                                        {errors.cityError}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridRole">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Role" defaultValue={userInfo.role} onChange={e => setUserInfo(prevState => ({
                                        ...prevState,
                                        role: e.target.value
                                    }))} />
                                    <Form.Text className="text-danger">
                                        {errors.roleError}
                                    </Form.Text>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Button variant="warning" onClick={() => updateUser(usersApiData, setUsersApiData)}>Submit</Button>
                            </Form.Row>
                        </Form>
                    </Modal.Body>
                </Modal>
            )}
        </UsersDataContext.Consumer>
    );
}

export default Update;