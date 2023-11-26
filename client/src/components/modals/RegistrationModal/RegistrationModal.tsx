import classes from './RegistrationModal.module.scss';
import {useState } from "react";
import { Formik } from "formik";
import {IFormErrors} from "./types";

export const RegistrationModal = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const title = isSignUp ? 'Sign Up' : 'Sign In';;
    const infoMode = isSignUp ? 'Already have account? Sign In' : 'No have account? Create it';
    const changeModeButton = isSignUp ? 'Sign In' : 'Sign Up';

    const clickHandler = () => {
        setIsSignUp(!isSignUp);
    }

    return (
        <div className={classes.modal}>
            <div className={classes.modal__overlay}></div>
            <div className={classes.modal__content}>
                <h2 className={classes.modal__title}>{title}</h2>

                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors: IFormErrors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password && errors.password}
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>

                <div>
                    <p>{infoMode}</p>
                    <button type={'button'} onClick={clickHandler}>{changeModeButton}</button>
                </div>
            </div>
        </div>
    );
};
