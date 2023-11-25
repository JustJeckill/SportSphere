import classes from './App.module.scss';
import { RegistrationModal } from "./modals/RegistrationModal/RegistrationModal";
import { Outlet } from "react-router-dom";
import {useEffect, useState} from "react";

export const App = () => {
    const [food, setFood] = useState(null);

    useEffect(() => {
        getFood();
    }, []);

    const getFood = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (response.ok) {
            const json = await response.json();
            console.log(json);
        } else {
            alert("HTTP-Error: " + response.status);
        }
    }

    return(
        <div className={classes.text}>
            <Outlet />
            <RegistrationModal />
        </div>
    )
}
