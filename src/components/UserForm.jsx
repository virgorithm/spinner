import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/users/usersSlice";

const UserForm = () => {
    const [name,setName] = useState('')
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addUser({name}));
        setName('');
    };

    return (
        <div className="p-5">
            <input value={name} required onChange={(e) => setName(e.target.value)}/>
            <button onClick={handleAdd} className="w-full max-w-md space-y-2">Add User</button>
        </div>
    )
}

export default UserForm;