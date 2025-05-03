import React from "react";
//import {userSelector, useSelector} from 'react-redux';
import  FetchUsers  from "./FetchUsers";

const UserList = () => {
   // const users = useSelector(userList);

    return(
        <div className="user-list"> 
        <FetchUsers />
        
        </div>
       
    )
}

export default UserList;