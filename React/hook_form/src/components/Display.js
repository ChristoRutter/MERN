import React from "react";

const Display = (props) => {

    const {userList} = props;

    return (
        <div>
            <h1>Your Form Data:</h1>
            <div >
                {userList.map((student, index) => (
                    <div
                    
                        key={index}
                    >
                        <p>Name: {student.firstName}</p>
                        <p>Last Name: {student.lastName}</p>
                        <p>Email: {student.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Display;
