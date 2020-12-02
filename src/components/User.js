import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaBookOpen, FaTrash } from "react-icons/fa";
import Course from './Course';

import { UsersDataContext } from '../App';

const User = ({ usersData, value }) => {

    const [course, setCourse] = useState({});
    const [loadingCourse, setLoadingCourse] = useState(true);

    //Modal States and functions
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const showCourses = (id) => {
        handleShow();

        const fetchCourseData = async () => {
            setLoadingCourse(true);
            const result = await fetch("https://pre.bistrainer.com/v1/index.cfm?action=testapi.courses&id=" + id);
            const jsonData = await result.json();

            setCourse(jsonData);
            setLoadingCourse(false);
        }
        fetchCourseData();
    }

    const deleteUser = (id, apiData, setApiData) => {

        if (window.confirm(`Are you sure you wish to delete User: ${id}?`)) {
            setApiData({
                success: apiData.success,
                users: apiData.users.filter((user) => {
                    return user.id !== id;
                })
            });
        }
    }

    return (
        <>
            <tr>
                <td>{value.name}</td>
                <td>{value.username}</td>
                <td>{value.role}</td>
                <td>{value.city}</td>
                <td>{value.address}</td>
                <td>{value.phone}</td>
                <td>{value.email}</td>
                <td>
                    <Button variant="info" onClick={() => showCourses(value.id)}><FaBookOpen /> Courses</Button>
                    <UsersDataContext.Consumer>
                        {({ usersApiData, setUsersApiData }) => (
                            <Button variant="danger" onClick={() => deleteUser(value.id, usersApiData, setUsersApiData)}><FaTrash /> Delete</Button>
                        )}
                    </UsersDataContext.Consumer>
                </td>
            </tr>
            {!loadingCourse && <Course handleClose={handleClose} show={show} name={value.name} course={course} />}
        </>
    );
}

export default User;