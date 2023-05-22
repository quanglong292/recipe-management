import { createBrowserRouter } from "react-router-dom";
import App from "./App";

// @ts-ignore
import FormBuilderApp from "remoteApp/FormBuilder";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/create-new",
        element: <FormBuilderApp />,
    }
]);