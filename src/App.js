import React from "react";
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import Counter2 from './components/Counter2/Counter2'
import CounterContextProvider from "./counteContext";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// users
import AddForm from './components/AddForm/AddForm';
import EditForm from './components/EditForm/EditForm';
import Details from './components/Details/Details';
import UserList from './components/UserList/UserList';

function App() {
  return (
  <CounterContextProvider >  
    <BrowserRouter>
      <Routes>
        <Route path="counter" element= {<Counter />}/>
        <Route path="counter2" element = {<Counter2 />} />

        {/* users route  */}
        <Route path="/edit/:id" element = {<EditForm />}/>
        <Route path="/details/:id" element = {<Details />}/>
        <Route path="/users" element = {<><AddForm /> <UserList /></>}/>
      </Routes>
    </BrowserRouter>
  </CounterContextProvider>
  );
}

export default App;
