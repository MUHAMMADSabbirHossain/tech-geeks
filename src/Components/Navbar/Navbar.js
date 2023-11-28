import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import Logo from "../../Assets/Image/logo.png";
import Logo from "../../Assets/Image/logo.png.png";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";

const Navbar = () => {
    const { pathname } = useLocation();
    const [user, setUser] = useState({});
    // console.log(user);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                setUser(user);
                // ...
            } else {
                // User is signed out
                // ...
                setUser({});
            }
        });
    }, []);

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <nav
            style={
                pathname.includes("blog") ? { display: "none" } : { display: "flex" }
            }
        >
            <div className='logo-container'>
                <img src={Logo} alt='' />
            </div>
            <div className='link-container'>
                <NavLink
                    className={({ isActive }) => (isActive ? "active-link" : "link")}
                    to='/'
                >
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "active-link" : "link")}
                    to='/videos'
                >
                    Videos
                </NavLink>
                {user?.uid ? (
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                ) : (
                    <NavLink
                        className={({ isActive }) => (isActive ? "active-link" : "link")}
                        to='/login'
                    >
                        Login
                    </NavLink>)}
                {/* <p><small>{user?.displayName}</small></p> */}
            </div>
        </nav >
    );
};

export default Navbar;