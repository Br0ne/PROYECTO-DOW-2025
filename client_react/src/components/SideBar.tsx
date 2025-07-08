import { NavLink, useNavigate } from "react-router-dom";

export default function SideBar() {
    const navigate = useNavigate()

    const handlelogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        navigate('login')
    }
    return (
        
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white min-vh-100" style={{ width: "280px", position: "fixed", top: 0, left: 0, height: "100vh" }}>
                <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <i className="bi bi-car-front-fill fs-1 me-3"></i>
                    <span className="fs-4">Renta de Autos</span> </NavLink>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item mb-2">
                        <NavLink to="/" className="nav-link" aria-current="page">
                            <i className="bi bi-house me-2"></i>
                            Principal
                        </NavLink> </li>
                    <li className="nav-item mb-2">
                        <NavLink to="/agregar-arriendo" className="nav-link " aria-current="page">
                            <i className="bi bi-box-arrow-up me-2"></i>
                            Agregar Arriendo
                        </NavLink> </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="gestionarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-gear me-2"></i>
                            Gestionar Arriendos
                        </a>
                        <ul className="dropdown-menu bg-dark" aria-labelledby="gestionarDropdown">
                            <li>
                                <NavLink className="dropdown-item text-white" to="/arriendos/activos">
                                    Ver Activos
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="dropdown-item text-white" to="/arriendos/terminados">
                                    Ver Terminados
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr />
                <div className="dropdown"> <a href="#"
                    className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <strong>Usuario</strong> </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><button className="dropdown-item" onClick={() => navigate("/cambiar-password")}>Cambiar Contraseña</button></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" onClick={handlelogout}>Cerrar Sesion</a></li>
                    </ul>
                </div>
            </div>
    )
}