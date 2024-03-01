import { useContext } from "react";
import { AppContext } from "../App"

export const Home = () => {
    const { userName } = useContext(AppContext);

    return (
        <div className="home-component">
            <h1>Home Page: User is {userName}</h1>
            <p>Change user from Profile Page</p>
        </div>
    )
}