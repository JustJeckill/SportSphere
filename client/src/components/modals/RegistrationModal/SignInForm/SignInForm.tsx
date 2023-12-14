import { Formik, FormikErrors } from "formik";

import { IFormSignInValues } from "../types";

import classes from "../RegistrationModal.module.scss";


const SignInForm = () => {
    const submitFormHandler = (values: IFormSignInValues, actions: any) => {
        // console.log(values);
        // console.log(actions.setSubmitting);
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        }, 400);
    }

    const validateForm = (values: IFormSignInValues) => {
        const { email, password } = values;
        const errors: FormikErrors<IFormSignInValues> = {};

        if (email.length < 1) {
            errors.email = 'Required';
        } else if (isValidEmail(email)) {
            errors.email = 'Invalid email address';
        }

        if (password.length < 1) {
            errors.password = 'Required';
        } else if (isValidPassword(password)) {
            errors.password = 'Invalid password';
        }

        return errors;
    }

    const initialValues: IFormSignInValues = { email: '', password: '' };

    const isValidEmail = (email: string) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
    // min 8 letter password, with at least a symbol, upper and lower case letters and a number
    const isValidPassword = (password: string) => !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(password);

    return(
        <>
            <h2 className={classes.modal__title}>Sign into account</h2>

            { /*or use useFormik hook*/ }
            <Formik
                initialValues={initialValues}
                validate={validateForm}
                onSubmit={submitFormHandler}
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
                  }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            { errors.email && touched.email && <span>{ errors.email }</span> }
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            { errors.password && touched.password && <span>{ errors.password }</span> }
                            <button type="submit" disabled={isSubmitting}>
                                Enter into account
                            </button>
                        </form>
                    )
                }}
            </Formik>
        </>
    )
}

export default SignInForm;
