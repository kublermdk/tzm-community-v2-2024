"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
// import { useSignInModal } from "./sign-in-modal";
// import UserDropdown from "./user-dropdown";
// import { Session } from "next-auth";

export default function NavBar() {
    // const { SignInModal, setShowSignInModal } = useSignInModal();
    const scrolled = useScroll(50);

    const navLinkClasses = `rounded border border-purple-950 bg-purple-400 p-1.5 px-4 mr-3 text-sm text-white transition-all hover:bg-black hover:text-white`;
    return (
        <>
            {/*<SignInModal />*/}
            <div
                className={`fixed top-0 w-full flex justify-center ${
                    scrolled
                        ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
                        : "bg-white/0"
                } z-30 transition-all`}
            >
                <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
                    <Link href="/" className="flex items-center font-display text-2xl">
                        <Image
                            src="/logo.png"
                            alt="TZM Community logo"
                            width="30"
                            height="30"
                            className="mr-2 rounded-sm"
                        ></Image>
                        <p>TZM Community</p>
                    </Link>
                    <div>
                        <Link href="/about" className={navLinkClasses}>About</Link>
                        <Link href="/news" className={navLinkClasses}>Latest News</Link>
                        <Link href="/events" className={navLinkClasses}>Events</Link>
                        <Link href="/community" className={navLinkClasses}>Community</Link>
                        <Link href="/discord" className={navLinkClasses}>Discord</Link>
                        <Link href="/codeofconduct" className={navLinkClasses}>Code Of Conduct</Link>
                        <Link
                            href="https://cloud.tzm.community/"
                            className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                            title="The TZM Community NextCloud"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
