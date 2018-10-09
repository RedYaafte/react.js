import React from 'react';

const UserDetail = (props) => {
    return <p>{props.user.firstName} {props.user.lastName} - {props.user.birthDate}</p>
}

export default UserDetail;