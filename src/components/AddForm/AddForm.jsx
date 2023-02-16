import React, {useContext, useState} from 'react';
import { usersContext } from '../../usersContext';

const AddForm = () => {
  const {createUser} = useContext(usersContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>AddForm</div>
  )
}

export default AddForm