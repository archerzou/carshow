'use client';

import Search from "@/app/nav/Search";
import Logo from "@/app/nav/Logo";

import { useSession } from "next-auth/react";
import UserActions from "@/app/nav/UserActions";
import LoginButton from "@/app/nav/LoginButton";

const NarBar = () => {
    const session = useSession();
    return (
        <header className="sticky top-0 z-50 flex justify-between
            bg-white p-5 items-center text-gray-800 shadow-md">
            <Logo />
            <Search />
            {session.data?.user ? (
                <UserActions user={session.data.user} />
            ) : (
                <LoginButton />
            )}
        </header>
    );
};

export default NarBar;