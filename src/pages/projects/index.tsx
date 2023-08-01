import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import VencruTest from "@/img/Unknown-4.png"
import Dashboard from "@/img/dashboard.png"

import PrimaryLayout from "@/components/template/PrimaryLayout";
import Link from "next/link";
import Image from "next/image";

const Projects: NextPage = () => {
  const title = "Projects";

  return (
    <>
        <Head>
            <title> {title} </title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
        </Head>

        <main>
            <PrimaryLayout>
              <div className="grid grid-cols-2 grid-rows-2 gap-8 w-[100%] h-[100%] p-8">
                <section className="flex flex-col items-center w-full h-full gap-4">
                  <div className="rounded-md overflow-hidden">
                      <Image src={Dashboard} alt="test"/>
                  </div>
                  <div className="font-extrabold text-violet-400"> 
                    {/* <Link href="https://vencru-test-33hnvrd30-edmund0.vercel.app" className="font-extrabold text-violet-400"> */}
                      Developed a web application capable of handling thousands of users in the form of a Software-as-a-Service (SaaS)
                    {/* </Link> */}
                  </div>
                </section>
                <section className="flex flex-col items-center w-full h-full gap-4">
                  <div className="rounded-md overflow-hidden">
                    <Link href="https://vencru-test-33hnvrd30-edmund0.vercel.app" className="">
                      <Image src={VencruTest} alt="test"/>
                    </Link>
                  </div>
                  <div> 
                    <Link href="https://vencru-test-33hnvrd30-edmund0.vercel.app" className="font-extrabold text-violet-400">
                      Basic webpage demonstrating ability to build Detailed UI
                    </Link>
                  </div>
                </section>
                <section></section>
                <section></section>
              </div>
            </PrimaryLayout>
        </main>
    </>
  );
};

export default Projects;
