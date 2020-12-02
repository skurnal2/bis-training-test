import React, { useState, useEffect } from 'react';
import UsersList from './components/UsersList';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Footer from './components/Footer';

export const UsersDataContext = React.createContext();

const App = () => {

  const [usersApiData, setUsersApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsersApiData = async () => {
    const result = await fetch('https://pre.bistrainer.com/v1/index.cfm?action=testapi.users');
    const jsonData = await result.json();

    setUsersApiData(jsonData);
    setLoading(false);
  }

  useEffect(() => {
    fetchUsersApiData();
  }, [])

  return (
    loading ? <LoadingScreen /> :
      <>
        <Header />
        <div className="app">
          <UsersDataContext.Provider value={{ usersApiData, setUsersApiData}}>
            <UsersList usersApiData={usersApiData} setUsersApiData={setUsersApiData} />
          </UsersDataContext.Provider>
        </div>
        <Footer />
      </>
  );
}

export default App;