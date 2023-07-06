import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import github from "@/img/github.png";
import linkedIn from "@/img/linkedIn.png";

interface MainNavProps {
    
}

const MainNav: React.FC<MainNavProps> = () => {
    const { push, pathname } = useRouter();
    const isActive = (name: string) => {
        return pathname?.includes(name)
    }

    return ( 
        <>
            <nav className="navBar">
                <div>

                </div>
                <main className="navGroup">
                    <Link href="/home">
                        <button className={`navItem ${isActive("home") && "activeNavItem"}`}>
                            <span className="navText">Home</span>
                        </button>
                    </Link>
                    <Link href="/about">
                        <button className={`navItem ${isActive("about") && "activeNavItem"}`}>
                            <span className="navText">About</span>
                        </button>
                    </Link>
                    <Link href="/skills">
                        <button className={`navItem ${isActive("skills") && "activeNavItem"}`}>
                            <span className="navText">Skills</span>
                        </button>
                    </Link>
                    <Link href="/projects">
                        <button className={`navItem ${isActive("projects") && "activeNavItem"}`}>
                            <span className="navText">Projects</span>
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button className={`navItem ${isActive("contact") && "activeNavItem"}`}>
                            <span className="navText">Contact</span>
                        </button>
                    </Link>
                </main>
                <section className="flex flex-col items-center gap-2 pt-0.5 pb-1.5 md:flex-row md:gap-4">
                    <Link href={"https://www.linkedin.com/in/chigoziem-edmund-ofili-689b14124/"}>
                        <Image 
                            src={linkedIn} 
                            style={{
                                width: 32,
                                height: 32,
                            }} 
                            className="rounded-full "
                            alt="linkedIn profile"/>
                    </Link>
                    <Link href={"https://github.com/Edmund0"}>
                        <Image 
                            src={github} 
                            style={{
                                width: 32,
                                height: 32,
                            }} 
                            className="rounded-full "
                            alt="github profile"/>
                    </Link>
                </section>
            </nav>
        </> );
}
 
export default MainNav;