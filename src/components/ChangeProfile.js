import { useState } from "react";

export const ChangeProfile = (props) => {

    const [newUsername, setNewUsername] = useState("");

    const handleUsername = (e) => {
        setNewUsername(e.target.value);
    }

    return (
        <div className="change-profile-component">
            <input onChange={handleUsername} type="text" />
            <button onClick={() => { props.setusername(newUsername) }}> Submit </button>
        </div >
    )
}