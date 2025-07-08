import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Sesion, {action as loginAction} from "./views/Sesion";
import PrivateRoute from "./components/PrivateRoute";
import Loader from "./components/Loader";
import Principal from "./views/Principal";
import AgregarArriendo, { action as actionAgregarArriendo} from "./views/AgregarArriendo";
import ArriendosActivos, { loader as loaderActivos} from "./views/ArriendosActivos";
import ArriendosTerminados , {loader as loaderTerminados} from "./views/ArriendosTerminados";
import BorrarArriendo from "./views/BorrarArriendo";
import RegistrarDevolucion, {loader as loaderDevolucion, action as actionDevlucion} from "./views/RegistrarDevolucion";

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <Sesion />,
        action: loginAction,
    },

    {
        path: '/',
        element: <Layout />,
        HydrateFallback: Loader,
        children: [
            {
                element: <PrivateRoute />,
                children: [
                    {
                        index: true,
                        element: <Principal />
                    },
                    {
                        path: "Agregar-Arriendo",
                        element: <AgregarArriendo />,
                        action: actionAgregarArriendo
                    },
                    {
                        path: "arriendos/activos",
                        element: <ArriendosActivos />,
                        loader: loaderActivos
                    },
                    {
                        path: "arriendos/terminados",
                        element: <ArriendosTerminados />,
                        loader: loaderTerminados
                    },
                    {
                        path: "arriendos/borrar",
                        element: <BorrarArriendo />
                    },
                    {
                        path: "arriendos/:id/devolucion",
                        element: <RegistrarDevolucion />,
                        loader: loaderDevolucion,
                        action: actionDevlucion
                    },
                ]

            }
        ]
    }
])