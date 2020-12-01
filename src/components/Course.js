import { useEffect } from "react";
import { Modal, Table } from 'react-bootstrap';

const Course = ({ handleClose, show, name, course }) => {

    useEffect(() => {
        console.log(course.classes);
    })

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{name} - Courses</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered hover>
                    <tr>
                        <th>Certificate</th>
                        <th>Pass Marks</th>
                        <th>Course Name</th>
                        <th>Marks</th>
                        <th>Course ID</th>
                        <th>Course Code</th>
                    </tr>
                    {course.classes.map((courseClass, index) => (

                        courseClass.marks >= courseClass.passmarks ?
                            <tr key={index}>
                                <td>
                                    <a className="btn btn-primary" href={courseClass.certificate}>{courseClass.certificate}</a>
                                </td>
                                <td>{courseClass.passmarks}</td>
                                <td>{courseClass.classname}</td>
                                <td>{courseClass.marks}</td>
                                <td>{courseClass.classid}</td>
                                <td>{courseClass.classcode}</td>
                            </tr>
                            :
                            <tr key={index} style={{ backgroundColor: "#EF5350" }}>
                                <td>
                                    <a className="btn btn-primary" href={courseClass.certificate}>{courseClass.certificate}</a>
                                </td>
                                <td>{courseClass.passmarks}</td>
                                <td>{courseClass.classname}</td>
                                <td>{courseClass.marks}</td>
                                <td>{courseClass.classid}</td>
                                <td>{courseClass.classcode}</td>
                            </tr>
                    ))}
                </Table>

            </Modal.Body>
        </Modal>
    );
}

export default Course;