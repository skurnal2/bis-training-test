import { useState, useEffect } from 'react';
import UsersList from './components/UsersList';
import LoadingScreen from './components/LoadingScreen';

const App = () => {

  const [usersApiData, setUsersApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsersApiData = async() => {
    const result = await fetch('https://pre.bistrainer.com/v1/index.cfm?action=testapi.users');
    const jsonData = await result.json();

    setUsersApiData(jsonData);
    setLoading(false);
  }

  useEffect(() => {
    fetchUsersApiData();
  }, [])

  return(
    loading ? <LoadingScreen/> :
    <div className="app">
      <UsersList users={usersApiData.users} />
    </div>
  );
}

export default App;