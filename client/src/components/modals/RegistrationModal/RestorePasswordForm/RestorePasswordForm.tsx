import { Formik, FormikErrors } from "formik";

import { IFormRestorePasswordValues } from "../types";

import classes from "../RegistrationModal.module.scss";


const RestorePasswordForm = () => {

    const submitFormHandler = (values: IFormRestorePasswordValues, actions: any) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        }, 400);
    }

    const validateForm = (values: IFormRestorePasswordValues) => {
        const { email } = values;
        const errors: FormikErrors<IFormRestorePasswordValues> = {};

        if (email.length < 1) {
            errors.email = 'Required';
        } else if (isValidEmail(email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }

    const initialValues: IFormRestorePasswordValues = { email: '' };

    const isValidEmail = (email: string) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);

    return(
        <>
            <h2 className={classes.modal__title}>Restore Password</h2>

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

                            <button type="submit" disabled={isSubmitting}>
                                Restore Password
                            </button>
                        </form>
                    )
                }}
            </Formik>
        </>
    )
}

export default RestorePasswordForm;
