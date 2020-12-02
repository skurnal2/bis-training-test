import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaBookOpen, FaTrash, FaUserEdit } from "react-icons/fa";
import Course from './Course';
import Update from './Update';

import { UsersDataContext } from '../App';

const User = ({ value }) => {

    //Course Dialog Box
    const [course, setCourse] = useState({});
    const [loadingCourse, setLoadingCourse] = useState(true);

    //Update Dialog Box
    const [user, setUser] = useState({});
    const [loadingUserUpdate, setLoadingUserUpdate] = useState(true);

    //Modal States and functions
    // -> Course
    const [showCourse, setShowCourse] = useState(false);
    const handleShowCourse = () => setShowCourse(true);
    const handleCloseCourse = () => setShowCourse(false);
    // -> Update
    const [showUpdate, setShowUpdate] = useState(false);
    const handleShowUpdate = () => setShowUpdate(true);
    const handleCloseUpdate = () => setShowUpdate(false);

    const showCourses = (id) => {
        handleShowCourse();

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

    const updateUser = (id, apiData) => {
        //Getting the user using id
        setUser(
            apiData.users.filter((user) => {
                return user.id === id;
            })
        );

        handleShowUpdate();
        setLoadingUserUpdate(false);
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
                            <>
                                <Button variant="danger" onClick={() => deleteUser(value.id, usersApiData, setUsersApiData)}><FaTrash /> Delete</Button>
                                <Button variant="warning" onClick={() => updateUser(value.id, usersApiData)}><FaUserEdit /> Edit</Button>
                            </>
                        )}
                    </UsersDataContext.Consumer>
                </td>
            </tr>
            {!loadingCourse && <Course handleClose={handleCloseCourse} show={showCourse} name={value.name} course={course} />}
            {!loadingUserUpdate && <Update handleClose={handleCloseUpdate} show={showUpdate} user={user[0]}/>}
        </>
    );
}

export default User;