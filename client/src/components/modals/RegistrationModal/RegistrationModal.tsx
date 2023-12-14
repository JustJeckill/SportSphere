import { useState } from "react";

import SignInForm from "./SignInForm/SignInForm";
import SignUpForm from "./SignUpForm/SignUpForm";

import classes from './RegistrationModal.module.scss';


export const RegistrationModal = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    const text = isSignUp ? 'Not registered?' : 'Already have an account?';
    const link = isSignUp ? 'Join us' : 'Sign In';

    const toggleStatus = () => {
        setIsSignUp(!isSignUp);
    }

    return (
        <div className={classes.modal}>
            <div className={classes.modal__overlay}></div>
            <div className={classes.modal__content}>
                { isSignUp ? <SignInForm /> : <SignUpForm /> }
                <p>{text} <span onClick={toggleStatus}>{link}</span></p>
            </div>
        </div>
    );
};
