import React, {useState} from "react";
import axios from 'axios';

export const usersContext = React.createContext();

const UsersContextProvider=({children}) => {
    const API = 'http://localhost:8000/users';
    const [users, setUsers] = useState([]);

    async function getUsers() {
        let res = await axios(API);
        setUsers(res.data);
    }

    async function createUser(newUser) {
        await axios.post(API, newUser);
        getUsers();
    }
    return (
        <usersContext.Provider value={{
            users,     

            getUsers, 
            createUser
        }}>
            {children}
        </usersContext.Provider>
    )
}
