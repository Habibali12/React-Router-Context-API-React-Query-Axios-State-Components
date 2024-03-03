import { useContext } from "react";
import { AppContext } from "../App"
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export const Home = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["cat"],
        queryFn: () => {
            return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
        },
    });

    const { userName } = useContext(AppContext);

    if (isLoading) {
        return <h1>Loading...</h1>
    };


    return (
        <div className="home-component">
            <h1>Home Page: User is {userName}</h1>
            <p>Change user from Profile Page</p>
            <p>{data?.fact}</p>
        </div>
    )
}