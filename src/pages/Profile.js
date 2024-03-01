import { ChangeProfile } from "../components/ChangeProfile"

export const Profile = (props) => {
    return (
        <div className="profile-component">
            <h1>Profile: {props.username} </h1>
            <ChangeProfile setusername={props.setusername} />
        </div>
    )
}