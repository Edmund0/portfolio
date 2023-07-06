import React, { PropsWithChildren } from "react";
import MainNav from "@/components/MainNav";

interface PrimaryLayoutProps {
    
}
 
const PrimaryLayout: React.FC<PropsWithChildren<PrimaryLayoutProps>> = ({children}) => {
    return ( 
        <>
            <div className="w-screen h-screen bg-black">
                <MainNav/>
                <div className="flex flex-col items-center pt-[102px] md:pt-[64px] w-full h-full bg-slate-700 overflow-y-scroll" >
                    <div className="flex flex-col w-[95%] h-full bg-black shadow-md">
                        {children}
                    </div>
                </div>
            </div>
        </> );
}
 
export default PrimaryLayout;