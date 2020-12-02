import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaBookOpen, FaTrash } from "react-icons/fa";
import Course from './Course';

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

    const deleteUser = (id) => {

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
                <Button variant="info" onClick={() => showCourses(value.id)}><FaBookOpen/> Courses</Button>     
                <Button variant="danger" onClick={() => deleteUser(value.id)}><FaTrash/> Delete</Button>                
            </td>
        </tr>
        {!loadingCourse && <Course handleClose={handleClose} show={show} name={value.name} course={course}/>}
        </>
    );
}

export default User;