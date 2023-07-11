import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

import PrimaryLayout from "@/components/template/PrimaryLayout";

const About: NextPage = () => {
  const title = "About";

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
              <div className="flex flex-col justify-center p-20 w-full h-screen">
                <div className="flex flex-col justify-center gap-4 w-full h-full">
                  <div className="flex flex-col justify-center gap-1 w-full">
                    <h1 className="font-extrabold text-3xl text-gray-50">About Me</h1>
                    <hr className={"border-b h-[4px] bg-gray-700 border-solid border-gray-700 w-full"} />
                  </div>
                  <div className="pl-4">
                  <p className="font-medium text-lg">I am a highly-motivated and detail-oriented Front-End Developer with a strong passion for creating engaging and user-friendly web experiences. Seeking to leverage my technical skills and creativity to contribute to the success of a dynamic organization.</p>
                  </div>
                </div>
              </div>
            </PrimaryLayout>
        </main>
    </>
  );
};

export default About;