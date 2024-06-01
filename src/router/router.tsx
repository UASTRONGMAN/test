import {createBrowserRouter} from "react-router-dom";
import RegisterComponent from "../components/RegisterComponent";
import PageComponent from "../components/PageComponent";

export const routerConfig = createBrowserRouter(
    [
        {path:'/', element: <RegisterComponent/>},
        {path:'/page', element: <PageComponent/>}
    ]
)

