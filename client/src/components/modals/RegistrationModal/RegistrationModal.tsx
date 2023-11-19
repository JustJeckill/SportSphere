import classes from './RegistrationModal.module.scss';

export const RegistrationModal = () => {
    return (
        <div className={classes.modal}>
            <div className={classes.modal__overlay}></div>
            <div className={classes.modal__content}>
                <h2 className={classes.modal__title}>Welcome!</h2>
            </div>
        </div>
    );
};
