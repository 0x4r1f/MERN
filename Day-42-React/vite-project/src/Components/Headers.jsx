import { Link, NavLink } from "react-router";

const Headers = () => {
    return (
        <div>
            <NavLink to="/" className={({ isActive }) => isActive ? "font-bold" : ""}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "font-bold" : ""}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "font-bold" : ""}>Contact</NavLink>
        </div>
    );
};

export default Headers;