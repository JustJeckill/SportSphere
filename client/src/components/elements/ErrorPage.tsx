import { useRouteError } from "react-router-dom";
import React from "react";

const ErrorPage: React.FC = () => {
    const error = useRouteError();

    return(
        <p>{(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}</p>
    )
}

export default  ErrorPage;
