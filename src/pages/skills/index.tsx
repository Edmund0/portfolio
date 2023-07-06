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
            
            </PrimaryLayout>
        </main>
    </>
  );
};

export default Skills;