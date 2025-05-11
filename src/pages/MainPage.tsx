import SidebarComponent from "../components/SideBarComponent";
import { Outlet } from "react-router-dom";

export default function MainPage() {
    return (
        <>
            <div className="layout">
                <SidebarComponent />
                {/* <!-- Main content --> */}
                <div className="main">
                    <Outlet />
                </div>
            </div>
        </>
    );
}
