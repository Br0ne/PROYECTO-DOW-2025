import {  Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";


export default function Layout() {
    return (
        <>
            <div className="d-flex">
                {/* SideBar */}
                <SideBar/>
                {/* Principal */}
                <main className="container-fluid" style={{ marginLeft: "280px" }}>
                    <Outlet />
                </main>
            </div>
            

            
        </>
    )
}