import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const SecuredRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (user && user?.email) {
        return children;
    }

    return <Navigate to="/auth/login" />;
};

SecuredRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SecuredRoute;
