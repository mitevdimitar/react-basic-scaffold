import { useContext } from "react";
import AuthContext from "../state/contexts/AuthContext";
import Home from "./Home";
import Login from "./Login";

function Router() {
    const { state } = useContext(AuthContext);
    const { authenticated } = state;

    return (
        <>
            {authenticated ? (
                <Home />
            ) : (
                <Login />
            )}
        </>
    )
}

export default Router;