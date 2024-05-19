// import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import Navbar from "./navbar";
// import {getServerSession} from "next-auth/next";

// import NavigationMenu from './navbar-radix'
export default async function Nav() {
    // const session = await getServerSession(authOptions);
    return <Navbar/>;
    // return <NavigationMenu/>;
}
