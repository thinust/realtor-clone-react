// import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";

export default function Header() {
    const [pageStatus, setPageStatus] = useState("Sign in");
    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setPageStatus("Profile")
            } else {
                setPageStatus("Sign in")
            }
        });
    }, [auth]);

    function pathMathRoute(route) {
        if (route === location.pathname) {
            return true;
        }
    }

    return (
        <div className="bg-white border-b shadow-sm sticky top-0 z-40">
            <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
                <div>
                    <img
                        src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
                        alt="logo"
                        className="h-5 cursor-pointer"
                        onClick={() => navigate("/")}
                    />
                </div>
                <div>
                    <ul className="flex space-x-10">
                        <li onClick={() => navigate("/")} className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
            ${(pathMathRoute("/")) && "text-black border-b-red-500"}`}>Home
                        </li>
                        <li onClick={() => navigate("/offers")} className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
            ${(pathMathRoute("/offers")) && "text-black border-b-red-500"}`}>Offers
                        </li>
                        <li onClick={() => navigate("/profile")} className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
            ${(pathMathRoute("/sign-in") || pathMathRoute("/profile")) && "text-black border-b-red-500"}`}>{pageStatus}
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
}
