import Head from "next/head";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import PrimaryLayout from "@/components/template/PrimaryLayout";

const Home: NextPage = () => {
  const title = "Edmund Ofili";
  const router = useRouter();

  useEffect(() => {
    const shouldRedirect = true;

    if (shouldRedirect) {
      router.push("/home");
    }
  }, []);


  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
      <main>
        <PrimaryLayout>
          <div></div>
        </PrimaryLayout>
      </main>
    </>
  )
}
export default Home;