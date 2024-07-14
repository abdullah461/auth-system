"use client"

import { signOut } from "next-auth/react";

interface LogoutButtonProps {
    children?: React.ReactNode;
};

export const LogoutButton = ({
    children
}: LogoutButtonProps) => {
    const onclick = () => {
        signOut(); 
    };

    return (
        <span onClick={onclick} className="cursor-pointer">
            {children}
        </span>
    )
}