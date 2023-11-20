import classes from './App.module.scss';
import { RegistrationModal } from "./modals/RegistrationModal/RegistrationModal";
import { Outlet } from "react-router-dom";

export const App = () => {
    return(
        <div className={classes.text}>
            <Outlet />
            <RegistrationModal />
        </div>
    )
}
