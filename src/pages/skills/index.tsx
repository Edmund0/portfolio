import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

import PrimaryLayout from "@/components/template/PrimaryLayout";

const Skills: NextPage = () => {
  const title = "Skills";

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
                    <h1 className="font-extrabold text-xl text-gray-50">Technology Stack</h1>
                    <hr className={"border-b h-[4px] bg-gray-700 border-solid border-gray-700 w-full"} />
                  </div>
                  <ul className="pl-4 font-medium text-lg">
                    <li>Language: HTML5, CSS3, JavaScript, TypeScript</li>
                    <li>Frameworks: ExpressJS, TailwindCSS, ReactJS</li>
                    <li>Repositories: GitHub, BitBucket</li>
                    <li>Hosting Services: Vercel, Netlify</li>
                    <li>Other Tools: Node, Webpack, JEST, SASS</li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center gap-4 w-full h-full">
                  <div className="flex flex-col justify-center gap-1 w-full">
                    <h1 className="font-extrabold text-xl text-gray-50">Education</h1>
                    <hr className={"border-b h-[4px] bg-gray-700 border-solid border-gray-700 w-full"} />
                  </div>
                  <ul className="pl-4 font-medium text-lg">
                    <li>
                      <div>
                        Bachelor of Science in Electrical Engineering (UNIVERSITY OF ALBERTA, Edmonton, AB || August 2016 – June 2022)
                      </div>
                    </li>
                    <li>
                      <div>
                        Front-End Web Developer Nanodegree Program (UNIVERSITY OF ALBERTA, Edmonton, AB || May 2023)
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </PrimaryLayout>
        </main>
    </>
  );
};

export default Skills;