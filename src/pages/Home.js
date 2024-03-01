export const Home = (props) => {
    return (
        <div className="home-component">
            <h1>Home Page: User is {props.username}</h1>
            <p>Change user from Profile Page</p>
        </div>
    )
}