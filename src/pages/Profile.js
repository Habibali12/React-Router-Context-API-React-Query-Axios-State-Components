import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App"

export const Profile = () => {

    const { userName } = useContext(AppContext);

    return (
        <div className="profile-component">
            <h1>Profile: {userName} </h1>
            <ChangeProfile />
        </div>
    )
}