import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

import PrimaryLayout from "@/components/template/PrimaryLayout";
import Link from "next/link";
import Image from "next/image";

import LinkedIn from "@/img/LinkedIn.svg";
import Email from "@/img/Mail.svg";
import Resume from "@/img/Resume.svg";

const Contact: NextPage = () => {
  const title = "Contact";

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
                    <h1 className="font-extrabold text-xl text-gray-50">Contact Information</h1>
                    <hr className={"border-b h-[4px] bg-gray-700 border-solid border-gray-700 w-full"} />
                  </div>
                  <div className="flex flex-row items-center gap-4 pl-4">
                    <div>
                      <Link className="underline text-blue-100 font-medium text-lg" href={"https://www.linkedin.com/in/chigoziem-edmund-ofili-689b14124/"}>
                        <Image
                          src={LinkedIn}
                          alt="LinkedIn Contact"
                          width={25}
                          height={25}
                        />
                      </Link>
                    </div>
                    <div>
                      <Link className="underline text-blue-100 font-medium text-lg" href={"mailto:goziem.ofili@gmail.com"}>
                        <Image
                          src={Email}
                          alt="Email Contact"
                          width={25}
                          height={25}
                        />
                      </Link>
                    </div>
                    <div><Link className="underline text-blue-100 font-medium text-lg" href={"tel:+16477015576"}>Phone</Link></div>
                    <div><Link className="underline text-blue-100 font-medium text-lg" href={"https://github.com/Edmund0"}>GitHub</Link></div>
                    <div>
                      <Link className="underline text-blue-100 font-medium text-lg" href={"https://github.com/Edmund0"}>
                        <Image
                          src={Resume}
                          alt="Resume"
                          width={25}
                          height={25}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </PrimaryLayout>
        </main>
    </>
  );
};

export default Contact;