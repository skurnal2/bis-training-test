import { useState } from 'react';
import User from './User';
import { Table, Button } from 'react-bootstrap';
import Add from './Add';

const UsersList = ({ usersApiData, setUsersApiData }) => {

    //Add Dialog Box    
    const [loadingUserAdd, setLoadingUserAdd] = useState(true);

    // -> Add
    const [showAdd, setShowAdd] = useState(false);
    const handleShowAdd = () => setShowAdd(true);
    const handleCloseAdd = () => setShowAdd(false);    

    const addNewUser = () => {
        handleShowAdd();                
        setLoadingUserAdd(false);
    }

    return (
        <div className="users-list">
            <Button variant="primary" className="add-button" onClick={() => addNewUser()}>Add New User</Button>
            {(!loadingUserAdd) && <Add usersApiData={usersApiData} setUsersApiData={setUsersApiData} handleClose={handleCloseAdd} show={showAdd} />}
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersApiData.users.map((user, key) => (
                            <User key={key} value={user} />
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default UsersList;