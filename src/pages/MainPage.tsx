import Sidebar from "../components/SideBar";
import { Outlet } from "react-router-dom";

export default function MainPage() {
    return (
        <>
            <div className="layout">
                <Sidebar />
                {/* <!-- Main content --> */}
                <div className="main">
                    <Outlet />
                </div>
            </div>
        </>
    );
}
