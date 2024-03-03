import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile = () => {

    const [newUsername, setNewUsername] = useState("");

    const handleUsername = (e) => {
        setNewUsername(e.target.value);
    }

    const { setuserName } = useContext(AppContext);

    return (
        <div className="change-profile-component">
            <input onChange={handleUsername} type="text" />
            <button onClick={() => { setuserName(newUsername) }}> Submit </button>
        </div >
    )
}