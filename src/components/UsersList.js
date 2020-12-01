import User from './User';
import {Table} from 'react-bootstrap';

const UsersList = ({ users }) => {
    return (
        <div className="users-list">
            <Table striped bordered hover  variant="light">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Courses</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, key) => (
                            <User key={key} value={user} />
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default UsersList;