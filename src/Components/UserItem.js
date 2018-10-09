import React from 'react';


const UserItem = (props) => {
    return (
        <li>{props.firstName} {props.lastName}</li>
    )
}

export default UserItem;