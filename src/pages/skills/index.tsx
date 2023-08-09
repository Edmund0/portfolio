import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import Image from "next/image";

import PrimaryLayout from "@/components/template/PrimaryLayout";
import HTML5 from "@/assets/img/Technological Stack/HTML5.svg";
import CSS3 from "@/assets/img/Technological Stack/CSS3.svg";
import JS from "@/assets/img/Technological Stack/JS.svg";
import TS from "@/assets/img/Technological Stack/TS.svg";
import SASS from "@/assets/img/Technological Stack/SASS.svg";
import TAILWINDCSS from "@/assets/img/Technological Stack/TailwindCSS.svg";
import WEBPACKJS from "@/assets/img/Technological Stack/Webpack.svg";
import REACTJS from "@/assets/img/Technological Stack/ReactJS.svg";
import NEXTJS from "@/assets/img/Technological Stack/NEXTJS.svg";
import NODEJS from "@/assets/img/Technological Stack/Node.svg";
import EXPRESSJS from "@/assets/img/Technological Stack/EXPRESSJS.svg";
import GITHUB from "@/assets/img/Technological Stack/Github.svg";
import BITBUCKET from "@/assets/img/Technological Stack/Bitbucket.svg";
import NETLIFY from "@/assets/img/Technological Stack/NETLIFY.svg";
import VERCEL from "@/assets/img/Technological Stack/Vercel.svg";

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
              <div className="flex flex-col justify-center p-20 gap-8 w-full min-h-screen h-full">
                <div className="flex flex-col justify-center gap-4 w-full h-full">
                  <div className="flex flex-col justify-center gap-1 w-full">
                    <h1 className="font-extrabold text-4xl text-gray-50">Education</h1>
                    <hr className={"border-b h-[4px] bg-gray-700 border-solid border-gray-700 w-full"} />
                  </div>
                  <ul className="pl-4 font-medium text-lg">
                    <li className="pb-4">
                      <div>
                        <div className="flex flex-row justify-between">
                          <div><b>UNIVERSITY OF ALBERTA</b>, Edmonton, AB</div>
                          <div>August 2016 – June 2022</div>
                        </div>
                        Bachelor of Science in Electrical Engineering
                      </div>
                    </li>
                    <li>
                      <div>
                        <div className="flex flex-row justify-between">
                          <div><b>UDACITY</b>, Edmonton, AB</div>
                          <div>May 2023</div>
                        </div>
                        Front-End Web Developer Nanodegree Program
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center gap-4 w-full h-full">
                  <div className="flex flex-col justify-center gap-1 w-full">
                    <h1 className="font-extrabold text-4xl text-gray-50">Technology Stack</h1>
                    <hr className={"border-b h-[4px] bg-gray-700 border-solid border-gray-700 w-full"} />
                  </div>
                  <div className="">
                    <div className="pl-4 font-medium text-2xl"> LANGUAGE COMPETENCY </div>
                    <div className="inline-flex flex-row justify-start gap-8 flex-wrap p-10">
                      <div className="flex flex-col items-center gap-4">
                        <div className="text-lg font-bold">HTML5</div>
                        <Image
                          src={HTML5}
                          height={100}
                          width={100}
                          alt="HTML5 LOGO"
                        ></Image>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div className="text-lg font-bold">CSS3</div>
                        <Image
                          src={CSS3}
                          height={100}
                          width={100}
                          alt="CSS3 LOGO"
                        ></Image>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div className="text-lg font-bold">JAVASCRIPT</div>
                        <Image
                          src={JS}
                          height={100}
                          width={100}
                          alt="JS LOGO"
                        ></Image>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div className="text-lg font-bold">TYPESCRIPT</div>
                        <Image
                          src={TS}
                          height={100}
                          width={100}
                          alt="TS LOGO"
                        ></Image>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="pl-4 font-medium text-2xl"> DEVELOPMENT TOOLS COMPETENCY </div>
                    <div className="inline-flex flex-row justify-start gap-8 flex-wrap p-10">
                      <div className="flex flex-col items-center gap-4">
                        <div className="text-lg font-bold">SASS</div>
                        <Image
                          src={SASS}
                          height={100}
                          width={100}
                          alt="SASS.CSS LOGO"
                        ></Image>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div className="text-lg font-bold">TAILWIND.CSS</div>
                        <Image
                          src={TAILWINDCSS}
                          height={100}
                          width={100}
                          alt="TAILWIND.CSS LOGO"
                        ></Image>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div className="text-lg font-bold">REACT.JS</div>
                        <Image
                          src={REACTJS}
                          height={100}
                          width={100}
                          alt="REACT.JS LOGO"
                        ></Image>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div className="text-lg font-bold">NEXT.JS</div>
                        <Image
                          src={NEXTJS}
                          height={100}
                          width={100}
                          alt="NEXT.JS LOGO"
                        ></Image>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div className="text-lg font-bold">NODE.JS</div>
                        <Image
                          src={NODEJS}
                          height={100}
                          width={100}
                          alt="NODE.JS LOGO"
                        ></Image>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div className="text-lg font-bold">EXPRESS.JS</div>
                        <Image
                          src={EXPRESSJS}
                          height={100}
                          width={100}
                          alt="EXPRESS.JS LOGO"
                        ></Image>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div className="text-lg font-bold">WEBPACK.JS</div>
                        <Image
                          src={WEBPACKJS}
                          height={100}
                          width={100}
                          alt="WEBPACK.JS LOGO"
                        ></Image>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="pl-4 font-medium text-2xl"> REPOSITORY AND WEB HOSTING COMPETENCY </div>
                    <div className="inline-flex flex-row justify-start gap-8 flex-wrap p-10">
                      <div className="flex flex-col items-center gap-4">
                        <div className="text-lg font-bold">GITHUB</div>
                        <Image
                          src={GITHUB}
                          height={100}
                          width={100}
                          alt="GITHUB LOGO"
                        ></Image>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div className="text-lg font-bold">BITBUCKET</div>
                        <Image
                          src={BITBUCKET}
                          height={100}
                          width={100}
                          alt="BITBUCKET LOGO"
                        ></Image>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div className="text-lg font-bold">NETLIFY</div>
                        <Image
                          src={NETLIFY}
                          height={100}
                          width={100}
                          alt="NETLIFY LOGO"
                        ></Image>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div className="text-lg font-bold">VERCEL</div>
                        <Image
                          src={VERCEL}
                          height={100}
                          width={100}
                          alt="VERCEL LOGO"
                        ></Image>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PrimaryLayout>
        </main>
    </>
  );
};

export default Skills;