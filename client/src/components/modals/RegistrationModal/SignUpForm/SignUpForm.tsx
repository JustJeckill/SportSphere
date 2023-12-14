import { Formik, FormikErrors } from "formik";

import { IFormSignUpValues } from "../types";

import classes from "../RegistrationModal.module.scss";


const SignUpForm = () => {

    const submitFormHandler = (values: IFormSignUpValues, actions: any) => {
        // console.log(values);
        // console.log(actions.setSubmitting);
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        }, 400);
    }

    const validateForm = (values: IFormSignUpValues) => {
        const { email, password, passwordConfirm } = values;
        const errors: FormikErrors<IFormSignUpValues> = {};

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

        if (passwordConfirm.length < 1) {
            errors.passwordConfirm = 'Required';
        } else if (!isValidPassword(passwordConfirm) || !isConfirmedPassword(password, passwordConfirm)) {
            errors.passwordConfirm = 'Invalid password';
        }

        return errors;
    }

    const initialValues: IFormSignUpValues = {
        email: '',
        name: '',
        password: '',
        passwordConfirm: '',
    };

    const isValidEmail = (email: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
    // min 8 letter password, with at least a symbol, upper and lower case letters and a number
    const isValidPassword = (password: string) => /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(password);
    const isConfirmedPassword = (password: string, passwordConfirm: string) => password == passwordConfirm;
    // нужно поубирать пробелы, возможно, использовать маску

    return(
        <div className={classes.modal__content}>
            <h2 className={classes.modal__title}>Create your account</h2>

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
                                Submit
                            </button>
                        </form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default SignUpForm;
