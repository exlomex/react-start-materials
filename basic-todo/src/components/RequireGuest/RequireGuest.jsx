import {Navigate, useLocation} from "react-router-dom";
import {USER_GUEST_KEY} from "../../consts/localStorage";

export const RequireGuest = (props) => {
    const {children} = props;

    const isGuest = localStorage.getItem(USER_GUEST_KEY) || String(true)

    const location = useLocation();

    if (isGuest === 'false') {
        return (
            <Navigate to={'/todos'} state={{ from: location }} replace/>
        );
    }

    return children;
}

