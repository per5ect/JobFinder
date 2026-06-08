import {Layout} from "../Layout.jsx";
import {HeaderAdminElement} from "./HeaderAdminElement.jsx";
import {getUserRole} from "../../../utils/jwtDecode.js";
import {HeaderUserElement} from "./HeaderUserElement.jsx";
import {HeaderGuestElement} from "./HeaderGuestElement.jsx";
import {HeaderCompanyElement} from "./HeaderCompanyElement.jsx";

export function Header() {

    const userRole = getUserRole();
    function getComponentByRole(role) {
        switch (role){
            case "ROLE_ADMIN":
                return <HeaderAdminElement />
            case "ROLE_USER":
                return <HeaderUserElement />
            case "ROLE_COMPANY":
                return <HeaderCompanyElement />
            default:
                return <HeaderGuestElement/>;
        }
    }

    return (
        <header className="w-full bg-black">
            <Layout>
                {getComponentByRole(userRole)}
            </Layout>
        </header>
    )
}