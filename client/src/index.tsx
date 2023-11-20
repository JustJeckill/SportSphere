import {createRoot} from "react-dom/client";
import {App} from "./components/App";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import About from "./components/pages/About/About";
import ErrorPage from "./components/elements/ErrorPage";


const root = document.getElementById('root');

if(!root) {
    throw new Error('root not found');
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/about',
                element: <About />
            }
        ],
        errorElement: <ErrorPage />
    },
]);

const container = createRoot(root);
container.render(
    <RouterProvider router={router} />
);
