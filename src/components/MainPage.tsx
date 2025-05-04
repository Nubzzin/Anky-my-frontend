import Sidebar from "./SideBar";
import { Outlet } from "react-router-dom";

export default function MainPage() {
    return (
        <>
            <div className="layout">
                <Sidebar />
                {/* <!-- Main content --> */}
                <div className="main">
                    {/* <!-- Header --> */}
                    <div className="header">
                        <h4>Dashboard</h4>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}
