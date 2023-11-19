import classes from './App.module.scss';
import {RegistrationModal} from "./modals/RegistrationModal/RegistrationModal";

export const App = () => {
    return(
        <div className={classes.text}>
            <RegistrationModal />
        </div>
    )
}
