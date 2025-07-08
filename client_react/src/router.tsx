import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Sesion, { action as loginAction } from "./views/Sesion";
import PrivateRoute from "./components/PrivateRoute";
import Loader from "./components/Loader";
import Principal, { loader as loaderPrincipal } from "./views/Principal";
import AgregarArriendo, { action as actionAgregarArriendo } from "./views/AgregarArriendo";
import ArriendosActivos, { loader as loaderActivos } from "./views/ArriendosActivos";
import ArriendosTerminados, { loader as loaderTerminados } from "./views/ArriendosTerminados";
import RegistrarDevolucion, { loader as loaderDevolucion, action as actionDevlucion } from "./views/RegistrarDevolucion";
import CrearUsuario, { action as actionUsuarioCrear } from "./views/CrearUsuario";
import CambiarPassword from "./views/CambiarPassword";

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <Sesion />,
        action: loginAction,
    },
    {
        path: "login/CrearUsuario",
        element: <CrearUsuario />,
        action: actionUsuarioCrear
    },

    {
        path: '/',
        element: <PrivateRoute />,
        children: [
            {
                element: <Layout />,
                HydrateFallback: Loader,
                children: [
                    {
                        index: true,
                        element: <Principal />,
                        loader: loaderPrincipal
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
                        path: "arriendos/:id/devolucion",
                        element: <RegistrarDevolucion />,
                        loader: loaderDevolucion,
                        action: actionDevlucion
                    },
                    {
                        path: "cambiar-password",
                        element: <CambiarPassword />
                    }

                ]

            }
        ]
    }
])